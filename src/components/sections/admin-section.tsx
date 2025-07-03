'use client';

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { LogIn, LogOut, Save, Send, Phone, Hash, Loader2 } from 'lucide-react';
import { AnimatedBubbles } from '@/components/layout/animated-bubbles';

const loginSchema = z.object({
  phoneNumber: z.string().min(10, 'Valid phone number is required.'),
});

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits.'),
});

const timingsSchema = z.object({
  fajr_today: z.string().min(1, "Time is required."),
  dhuhr_today: z.string().min(1, "Time is required."),
  asr_today: z.string().min(1, "Time is required."),
  maghrib_today: z.string().min(1, "Time is required."),
  isha_today: z.string().min(1, "Time is required."),
  fajr_tomorrow: z.string().min(1, "Time is required."),
  dhuhr_tomorrow: z.string().min(1, "Time is required."),
  asr_tomorrow: z.string().min(1, "Time is required."),
  maghrib_tomorrow: z.string().min(1, "Time is required."),
  isha_tomorrow: z.string().min(1, "Time is required."),
});

type LoginInputs = z.infer<typeof loginSchema>;
type OtpInputs = z.infer<typeof otpSchema>;
type TimingsInputs = z.infer<typeof timingsSchema>;

export function AdminSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const { toast } = useToast();

  const loginForm = useForm<LoginInputs>({ resolver: zodResolver(loginSchema), defaultValues: { phoneNumber: '' } });
  const otpForm = useForm<OtpInputs>({ resolver: zodResolver(otpSchema), defaultValues: { otp: '' } });
  const timingsForm = useForm<TimingsInputs>({
    resolver: zodResolver(timingsSchema),
    defaultValues: {
      fajr_today: '05:30', dhuhr_today: '13:15', asr_today: '16:45', maghrib_today: '19:00', isha_today: '20:30',
      fajr_tomorrow: '05:31', dhuhr_tomorrow: '13:15', asr_tomorrow: '16:46', maghrib_tomorrow: '19:01', isha_tomorrow: '20:31',
    }
  });

  const handleSendOtp: SubmitHandler<LoginInputs> = async (data) => {
    setIsLoading(true);
    try {
      // In a real app, you would send the phone number to your backend to trigger an OTP service.
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: data.phoneNumber }),
      });
      
      // MOCKING a successful response for demonstration purposes
      if (response.ok || !response.ok) { // For demo, we proceed even if API fails
        setPhoneNumber(data.phoneNumber);
        setShowOtpInput(true);
        toast({ title: 'OTP Sent', description: 'An OTP has been sent to your phone number.' });
      } else {
        const errorData = await response.json();
        toast({ variant: 'destructive', title: 'Failed to Send OTP', description: errorData.message || 'Please try again.' });
      }
    } catch (error) {
      toast({ variant: 'destructive', title: 'Network Error', description: 'Could not connect to the server.' });
    }
    setIsLoading(false);
  };

  const handleVerifyOtp: SubmitHandler<OtpInputs> = async (data) => {
    setIsLoading(true);
    try {
      // In a real app, you would verify the OTP with your backend.
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp: data.otp }),
      });

      // MOCKING a successful response for demonstration purposes
      if (response.ok || data.otp === '123456' ) { // For demo, we accept a hardcoded OTP
        setIsLoggedIn(true);
        toast({ title: 'Login Successful', description: 'You can now edit prayer timings.' });
      } else {
        otpForm.setError('otp', { type: 'manual', message: 'Invalid OTP. Please try again.' });
        toast({ variant: 'destructive', title: 'Login Failed', description: 'The OTP you entered is incorrect.' });
      }
    } catch (error) {
      toast({ variant: 'destructive', title: 'Network Error', description: 'Could not connect to the server.' });
    }
    setIsLoading(false);
  };

  const handleUpdateTimings: SubmitHandler<TimingsInputs> = async (data) => {
    setIsLoading(true);
    try {
      // In a real app, you would send the updated timings to your backend.
      const response = await fetch('/api/masjid/timings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' /* 'Authorization': 'Bearer YOUR_AUTH_TOKEN' */ },
        body: JSON.stringify(data),
      });

      if (response.ok || !response.ok) { // For demo, we assume success
        toast({ title: 'Timings Updated', description: 'Prayer timings have been successfully updated.' });
      } else {
        const errorData = await response.json();
        toast({ variant: 'destructive', title: 'Update Failed', description: errorData.message || 'Could not save timings.' });
      }
    } catch (error) {
      toast({ variant: 'destructive', title: 'Network Error', description: 'Could not connect to the server.' });
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowOtpInput(false);
    loginForm.reset();
    otpForm.reset();
    setPhoneNumber('');
    toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
  };
  
  const prayerTimes = [
    { id: 'fajr', label: 'Fajr' },
    { id: 'dhuhr', label: 'Dhuhr' },
    { id: 'asr', label: 'Asr' },
    { id: 'maghrib', label: 'Maghrib' },
    { id: 'isha', label: 'Isha' },
  ] as const;

  return (
    <section id="admin" className="relative pt-28 pb-12 md:pt-40 md:pb-24 bg-muted overflow-hidden scroll-mt-16">
      <AnimatedBubbles />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">
              {isLoggedIn ? 'Edit Prayer Timings' : 'Masjid Editor Login'}
            </CardTitle>
            <CardDescription className="text-center">
              {isLoggedIn ? 'Update the prayer schedules for today and tomorrow.' : 'Enter your credentials to manage your assigned masjid.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isLoggedIn ? (
              <div className="space-y-6">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(handleSendOtp)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="e.g., +1234567890" {...field} disabled={showOtpInput || isLoading} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {!showOtpInput && (
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
                        Send OTP
                      </Button>
                    )}
                  </form>
                </Form>

                {showOtpInput && (
                  <Form {...otpForm}>
                    <form onSubmit={otpForm.handleSubmit(handleVerifyOtp)} className="space-y-4 animate-in fade-in-50">
                      <FormField
                        control={otpForm.control}
                        name="otp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>OTP</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="Enter 6-digit OTP" {...field} disabled={isLoading} className="pl-10" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? <Loader2 className="animate-spin" /> : <LogIn />}
                        Login
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            ) : (
              <Form {...timingsForm}>
                <form onSubmit={timingsForm.handleSubmit(handleUpdateTimings)} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-4 border p-4 rounded-lg">
                      <h3 className="text-lg font-semibold font-headline">Today's Timings</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {prayerTimes.map(prayer => (
                          <FormField
                            key={`today-${prayer.id}`}
                            control={timingsForm.control}
                            name={`${prayer.id}_today` as keyof TimingsInputs}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{prayer.label}</FormLabel>
                                <FormControl>
                                  <Input placeholder="HH:MM" {...field} disabled={isLoading} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4 border p-4 rounded-lg">
                      <h3 className="text-lg font-semibold font-headline">Tomorrow's Timings</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {prayerTimes.map(prayer => (
                          <FormField
                            key={`tomorrow-${prayer.id}`}
                            control={timingsForm.control}
                            name={`${prayer.id}_tomorrow` as keyof TimingsInputs}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{prayer.label}</FormLabel>
                                <FormControl>
                                  <Input placeholder="HH:MM" {...field} disabled={isLoading} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="w-full sm:w-auto flex-1" disabled={isLoading}>
                      {isLoading ? <Loader2 className="animate-spin" /> : <Save />}
                      Update Timings
                    </Button>
                    <Button type="button" variant="outline" onClick={handleLogout} className="w-full sm:w-auto" disabled={isLoading}>
                      <LogOut />
                      Logout
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

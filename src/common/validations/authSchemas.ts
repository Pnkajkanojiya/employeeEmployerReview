// common/validations/authSchemas.ts
import { z } from 'zod';

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});
export type LoginSchema = z.infer<typeof loginSchema>;

// Register Schema
export const registerSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    mobileNumber: z.string().regex(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    rememberMe: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
export type RegisterSchema = z.infer<typeof registerSchema>;

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

// Reset Password Schema
export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const ratingSchema = z.object({
  workCulture: z.number().min(1, { message: 'Required' }),
  management: z.number().min(1, { message: 'Required' }),
  workLifeBalance: z.number().min(1, { message: 'Required' }),
  salaryBenefits: z.number().min(1, { message: 'Required' }),
  growthOpportunities: z.number().min(1, { message: 'Required' }),
});

export type RatingSchemaType = z.infer<typeof ratingSchema>;

// export const reviewSchema = z.object({
//   overallRating: z.number().min(1, { message: 'Overall rating is required' }),
//   companyName: z.string().min(1, { message: 'Company name is required' }),
//   review: z.string().min(1, { message: 'Review is required' }),
//   pros: z.string().optional(),
//   cons: z.string().optional(),
//   designation: z.string().optional(),
//   category: z.string().optional(),
//   anonymous: z.boolean(),

//   ratings: z.object({
//     workLifeBalance: z.number().min(1),
//     salaryBenefits: z.number().min(1),
//     promotionsAppraisal: z.number().min(1),
//     jobSecurity: z.number().min(1),
//     skillDevelopmentLearning: z.number().min(1),
//     workSatisfaction: z.number().min(1),
//     companyCulture: z.number().min(1),
//   }),
// });

export type ReviewFormSchema = z.infer<typeof reviewSchema>;

export const reviewSchema = z.object({
  ratings: z.object({
    culture: z.number().min(1, 'Culture is required'),
    compensation: z.number().min(1, 'Compensation is required'),
    balance: z.number().min(1, 'Work-life balance is required'),
    management: z.number().min(1, 'Management is required'),
  }),
  review: z.string().min(10, 'Review is required'),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;

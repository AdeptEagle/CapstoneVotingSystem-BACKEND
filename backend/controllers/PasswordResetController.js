import PasswordResetService from '../services/PasswordResetService.js';

export class PasswordResetController {
  static async requestPasswordReset(req, res) {
    try {
      const { email, userType } = req.body;
      
      if (!email || !userType) {
        return res.status(400).json({ 
          error: 'Email and user type are required' 
        });
      }
      
      if (!['voter', 'admin'].includes(userType)) {
        return res.status(400).json({ 
          error: 'User type must be either "voter" or "admin"' 
        });
      }
      
      const result = await PasswordResetService.generateResetToken(email, userType);
      
      res.status(200).json({
        success: true,
        message: 'Password reset link has been generated. Check the console for the reset link (for testing purposes).'
      });
      
    } catch (error) {
      console.error('Password reset request error:', error);
      res.status(400).json({ 
        error: error.message || 'Failed to generate password reset link' 
      });
    }
  }
  
  static async verifyResetToken(req, res) {
    try {
      const { token } = req.params;
      
      if (!token) {
        return res.status(400).json({ 
          error: 'Token is required' 
        });
      }
      
      const resetToken = await PasswordResetService.verifyResetToken(token);
      
      res.status(200).json({
        success: true,
        message: 'Token is valid',
        userType: resetToken.user_type
      });
      
    } catch (error) {
      console.error('Token verification error:', error);
      res.status(400).json({ 
        error: error.message || 'Invalid or expired token' 
      });
    }
  }
  
  static async resetPassword(req, res) {
    try {
      const { token, newPassword } = req.body;
      
      if (!token || !newPassword) {
        return res.status(400).json({ 
          error: 'Token and new password are required' 
        });
      }
      
      if (newPassword.length < 6) {
        return res.status(400).json({ 
          error: 'Password must be at least 6 characters long' 
        });
      }
      
      const result = await PasswordResetService.resetPassword(token, newPassword);
      
      res.status(200).json({
        success: true,
        message: 'Password reset successfully'
      });
      
    } catch (error) {
      console.error('Password reset error:', error);
      res.status(400).json({ 
        error: error.message || 'Failed to reset password' 
      });
    }
  }
  
  static async cleanupTokens(req, res) {
    try {
      await PasswordResetService.cleanupExpiredTokens();
      
      res.status(200).json({
        success: true,
        message: 'Expired tokens cleaned up successfully'
      });
      
    } catch (error) {
      console.error('Token cleanup error:', error);
      res.status(500).json({ 
        error: 'Failed to cleanup tokens' 
      });
    }
  }
} 
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { 
          label: 'username',
          type: 'text', 
          placeholder: 'Your Username' 
        },
        password: { 
          label: 'password', 
          type: 'password' 
        },
      },
      async authorize(credentials) {
        const user = { id: 'userid1234' };

        if (user) return user;

        return null;
      }
    })
  ],
});
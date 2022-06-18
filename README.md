# Authentication with Social Providers using Supabase

> Every Supabase project comes with a complete User Management system that works without any additional tools.

### All the social providers

Enable social logins with the click of a button. Google, Facebook, GitHub, Azure, Gitlab, Twitter, Discord, and many more.

### Fully integrated

Incredibly simple Auth, without a single external authentication service. Built-in Authentication, Authorization, and User Management.

### Own your data

User data stored in your Supabase database so you never have to worry about 3rd party privacy issues. Host your data in 8 different locations.

### Simple APIs

APIs that you can understand. With powerful libraries that work on client and server-side applications.

```javascript
// Sign in with GitHub
const { user, error } = await supabase.auth.signIn({
    provider: "github",
});
```
# Groupix

Groupix is a SaaS LMS platform empowers educators and businesses to easily create, manage, and monetize online courses and communities. With features like custom Stripe payments, multi-vendor support, white-label group hosting, affiliate marketing, and a modern UI with social interaction tools, it’s designed to boost engagement and streamline growth. Real-time metrics, infinite scroll, and optimized onboarding ensure a seamless and scalable experience.

<img width="1419" alt="image" src="https://github.com/user-attachments/assets/dbe09ea5-7160-4f4b-8d59-5a6b72a1a349">

## Features

- 💰 Custom single line stripe component with animations
- 🏆 Custom onboarding to increase conversions
- 🧑‍💼 Multi Vendor Support
- ✍️ Custom Clerk Sign in & out
- 🤝 Affiliate marketing systems for groups and for our app 
- 💥 Custom domain hosting inside the app using name servers to white label the groups
- 🏝️ New pricing model for groups, 1 group for $99/m
- 🎁 Free and Paid groups
- 🎥 Create and host course modules
- 📃 Custom about pages for groups
- ✍️ Node based text editor like notion
- 📱 Create posts, like and comment on posts
- 🎨 Beautiful and improved custom UI
- ⚙️ Production ready project setup with husky, linters and more
- 📄 Beautiful landing page for our app
- 🗺️ Explore page for all groups
- 🔍 Performant Search features
- 🛝 Custom Infinite carousels with infinite scroll
- 🔢Pagination with infinite scroll
- 📊 Dashboard to see group metrics

## Built with

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)
- [Supabase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [Upload Care](https://uploadcare.com/)

### Tools
- [Biome](https://biomejs.dev/)
- [Husky](https://typicode.github.io/husky/)

## Feature Requests

To request a feature open a [GitHub issue](https://github.com/anayatkhan1/Groupix/issues).

 ## Contribution Guidelines

Thank you for considering contributing to our SAAS LMS  project! Please follow these guidelines to ensure smooth collaboration:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine:
3. Create a new branch for your changes:

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. Make your changes and ensure they adhere to the project's coding style and guidelines.
5. Test your changes thoroughly to avoid introducing bugs.
6. Commit your changes with clear and descriptive commit messages:

    ```bash
    git commit -m 'feat: Add your descriptive commit message'
    ```
    ``Note:`` Before committing changes, ensure you include one of these tags in your commit message: ```feat, fix, wip, patch, build```.

7. Push your changes to your forked repository:

    ```bash
    git push origin feature/your-feature-name
    ```

8. Open a pull request against the `main` branch of the original repository.
9. Provide a clear and concise description of your changes in the pull request, along with any relevant information.
10. Ensure your pull request passes all checks and tests before requesting a review.

### Setting Up Environment Variables

To run the project locally, you need to set up the following environment variables:

```env
#CLERK
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/group/create
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/group/create
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# DEVELOPEMENT
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN=locahost:3000

#STRIPE
NEXT_PUBLIC_STRIPE_PUBLISH_KEY=
STRIPE_SECRET_KEY=

#UPLOAD CARE
NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY=
NEXT_PUBLIC_UPLOAD_CARE_SECRET=

#VERCEL ID
PROJECT_ID_VERCEL=
TEAM_ID_VERCEL=
AUTH_BEARER_TOKEN=

#SUPABASE
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_URL=

```
You can set these environment variables by creating a `.env.local or .env` file in the root directory of the project and adding the variables with their respective values:

# ignewsLuizCampos


This project is about paywall you can go to the home page and click on post to read information about react.js However if you would like to know more about this content you need to subscribe with Github account to see more information.


## Tech Stack

**Client:** React.js, Next.js, Prismic(Content Management System - CMS) and Stripe.

**Server:** Node, FaunaDB


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

```bash
Create an account on Stripe take those information below, create a file .env.local and input the informations as a sample on file .enc_sample

On Stripe create a product (name subscription)
Price AUD 9.90
Billing period Monthly 

To take the information below go to Developers/API keys.

STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_WEBHOOK_SECRET= 

```

Create an account on GitHub and take those information below

```bash
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=


```

```bash
FAUNADB_KEY=


```

```bash
FPRISMIC_ENDPOINT=https://ignews8campos.cdn.prismic.io/api/v2
PRISMIC_ACCESS_TOKEN=

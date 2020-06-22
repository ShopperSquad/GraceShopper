## Tier 1: MVP Shopping Experience

### As a customer/visitor, I want to be able to:

[x] - access a deployed version of the website so I can browse and purchase products.
[x] - view all available products so I can pick from a variety.
[x] - view a single product so I can see more details.
[x] - add a product to my cart so I can collect my desired products in one place.
[x] - edit my cart if I change my mind:
[x] - change the quantity of a product in my cart.
[x] - remove a product in my cart.
[x] - _No one else should be able to edit my cart except me._
[ ] - "checkout" the items in my cart so I can purchase my desired goods.
[x] - _Think of a typical user experience on popular websites from a guest user and logged-in user perspective._
[ ] - _You can just start with by simulating the experience of checking out with a simple confirmation page._
[x] - create an account so I can have a logged-in experience.

### As a logged-in customer, I want to be able to:

[x] - have a persistent cart so I can revisit and pick up where I left off.
[x] - _Logged-in-user across multiple devices: I'm logged in on my mobile device and add some items to my cart. When I open the browser on my laptop and log in, I want to see those items in my cart._
[x] - _No one else should be able to edit my cart except me._

### As an administrator, I want to be able to:

[x] - have validated data to ensure reliability.
_i.e. each customer that creates an account should only be able to do so once with a single email address._
[x] - have full rights to make backend requests to add, edit, and remove products.
[ ] - view user information.
[x] - _No one else should have access to the above._

### As an engineer, I want to:

[x] - have a well-seeded database so that I am able to simulate a number of different scenarios for the user stories below.
_By doing this, you really set yourselves up to tackle many of the points throughout the tiers. In the long run, this will save you, potentially, tons of time._
_For example, seed hundreds of products with dummy data so that when you get to the “pagination” user story, you won’t have to worry about adding more products._
[x] - _Likewise, add a bunch of users with products in their carts so editing the cart can be worked on without already having the “add to cart” functionality built out._
[x] - user data to be secure so that no one can unrightfully manipulate information.

## TIER 2: E-Commerce Essentials

<details><summary>Click Here To Open</summary>

### As a customer, I want to be able to:

[ ] - see all products that belong to a certain category.
[ ] - _Keep this simple. For example, a product can only belong to one category._
[ ] - explore an aesthetically pleasing website so I can easily navigate around and enjoy the experience (UI/UX).
[ ] - _This includes front-end data validations. For example, if certain fields of a form are required and must be in a specific format, this is obvious to the user._
[ ] - have a persistent cart so I can revisit and pick up where I left off.
[ ] - _There are two more experiences to consider here. Explore your favorite websites to see what the intended behavior is for the following cases:_
[ ] - **Guest-only:** I don't want to create an account, but I want my cart to persist between browser refreshes.
[ ] - Look into front-end storage for this one.
[ ] - **Guest-to-logged-in-user:** Initially, I'm not logged in, and I add items to my cart. When I eventually log in, I want to see those same items I added when I was logged in still in my cart, in addition to the items I may have had in my cart from a previous logged in session.

### As a logged-in customer, I want to be able to:

[ ] - see my order history so I can remember my previously purchased items and their prices at the time of purchase.
[ ] - view and edit my user profile so I can update my information when necessary.
[ ] - log in through third-party authentication so I can avoid creating an account specific to the website.
[ ] - _For example, Google OAuth._

### As an administrator, I want to be able to:

[ ] - allow customers to have a variety of payment method options in order to increase checkout conversion.
[ ] - _Begin by integrating Stripe, and, if interested, dive into integrating PayPal, Venmo, Braintree, or Bitcoin._
[ ] - edit products and manage users through a dashboard so I can easily make changes and assessments as necessary.

### As an engineer, I want:

[ ] - [continuous integration and delivery (deployment)](https://www.atlassian.com/continuous-delivery/continuous-integration) of the codebase so that there are lower rates of release failure.

</details>

## TIER 3: Extra Features & Flair

<details><summary>Click Here To Open</summary>

### As an administrator, I want to be able to:

[ ] - ensure accurate product inventory so that we can be sure only available products are sold.
[ ] - _For example, when a customer purchases an item, the quantity available is appropriately deducted._
[ ] - _Likewise, if a customer attempts to purchase a higher quantity of an item that is available, they will be alerted/notified that there isn't enough inventory._
[ ] - offer customers discounts through promo codes so that we can incentivize purchases.

### As a customer, I want to be able to:

#### Receive Notifications

[ ] - receive an email confirmation when placing an order so that I can easily reference it when needed without visiting my account.
[ ] - be notified when certain events occur so that I am informed of my actions.
[ ] - _For example, when I add a product to my cart, there is a toast notification that pops up in the corner of the page with an appropriate message for that action._

#### Have A Seamless Experience

[ ] - navigate the website successfully regardless of whether or not I am handicapped so that my experience isn't hampered.
[ ] - _This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.)._
[ ] - _[A11y Checklist](https://a11yproject.com/checklist)_
[ ] - view a display to know when content is loading or there is an error so that I can manage my expectations.
[ ] - _For example, loading spinners while the frontend is waiting for a backend response._
[ ] - _As a customer, if I visit a product page that doesn't exist, notify me that it doesn't and bring me to all products. Likewise, if I visit a page that outright doesn't exist, navigate me to the landing page._

#### Have A User-Friendly Experience

[ ] - filter through all products.
[ ] - _This is an opportunity to dive into a "search" input field. You can filter all products using vanilla JavaScript, or look into Algolia (search-as-a-service)._
[ ] - browse through all products in a digestible way so that I am not overwhelmed with an endless list of products.
[ ] - _Dive into pagination here!_
[ ] - _This goes back to the initial seed in Tier 1. If you have a database seeded with thousands of products, there shouldn't be any blockers in order to tackle this user story. It also begs the question of whether we should fetch all of the products from the database or limit the response in intervals (e.g. 25 at a time) and show more only through a user action (e.g. clicking a “Next”/”Show More” button)._
[ ] - _Keep in mind, if you already have the product filter feature built out, can you get pagination to work on the results as well?_
[ ] - view featured products so that I can get inspiration.
[ ] - _For example, display the five most purchased products within a given period of time (i.e. yesterday or last week), or the most recently added products._
[ ] - add products to a wishlist so that I can differentiate products I would like to purchase now (cart) versus products I might be interested in purchasing in the future (wishlist).

</details>

## TIER 4: S Tier

<details><summary>Click Here To Open</summary>

### As a customer, I want to be able to:

[ ] - post products to my social media accounts so that I can share with my friends/followers.
[ ] - _For example, integrating Facebook to create a post of a product's name, description, photo and link._
[ ] - receive recommended products so that I can have a customized user experience and get inspiration.
[ ] - _For example, based on products viewed (similar products; matching "tags")._
[ ] - feel like the website experience is customized for my native language.
[ ] - **Internationalization (i19n)**
[ ] - _The process of designing and building an application to facilitate localization. The main concern is that applications can be adapted to various languages and regions without engineering changes._
[ ] - **Localization (i10n)**
[ ] - _The cultural and linguistic adaptation of an internationalized application to two or more culturally-distinct markets._
[ ] - _For example, the website while the main language of the United States and United Kingdom is English, the currency (\$ vs. £) and date format (12/31/2020 vs. 31/12/2020) vary._
[ ] - _[Mozilla Internationalization & Localization Guidelines](https://www-archive.mozilla.org/docs/reflist/i18n/)_

### As an administrator, I want to be able to:

[ ] - visualize relevant KPIs (key performance indicators) in the admin dashboard so that I can make educated business decisions.
[ ] - _For example, a line graph of total sales over time._

### As a CEO/CTO, I want:

[ ] - the website to allow for multi tenancy so that we can potentially white label the application and allow users to create "shops."
[ ] - _Think Etsy and Amazon, where the sellers can have their own "shops" within the platforms._

</details>

## Customize

Now that you've got the code, follow these steps to get acclimated:

* Update project name and description in `package.json` and
  `.travis.yml` files
* `npm install`
* Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):

```
export MY_APP_NAME=boilermaker
createdb $MY_APP_NAME
createdb $MY_APP_NAME-test
```

* By default, running `npm test` will use `boilermaker-test`, while
  regular development uses `boilermaker`
* Create a file called `secrets.js` in the project root
  * This file is listed in `.gitignore`, and will _only_ be required
    in your _development_ environment
  * Its purpose is to attach the secret environment variables that you
    will use while developing
  * However, it's **very** important that you **not** push it to
    Github! Otherwise, _prying eyes_ will find your secret API keys!
  * It might look like this:

```
process.env.GOOGLE_CLIENT_ID = 'hush hush'
process.env.GOOGLE_CLIENT_SECRET = 'pretty secret'
process.env.GOOGLE_CALLBACK = '/auth/google/callback'
```

### OAuth

* To use OAuth with Google, complete the steps above with a real client
  ID and client secret supplied from Google
  * You can get them from the [Google APIs dashboard][google-apis].

[google-apis]: https://console.developers.google.com/apis/credentials

## Linting

Linters are fundamental to any project. They ensure that your code
has a consistent style, which is critical to writing readable code.

Boilermaker comes with a working linter (ESLint, with
`eslint-config-fullstack`) "out of the box." However, everyone has
their own style, so we recommend that you and your team work out yours
and stick to it. Any linter rule that you object to can be "turned
off" in `.eslintrc.json`. You may also choose an entirely different
config if you don't like ours:

* [Standard style guide](https://standardjs.com/)
* [Airbnb style guide](https://github.com/airbnb/javascript)
* [Google style guide](https://google.github.io/styleguide/jsguide.html)

## Start

Running `npm run start-dev` will make great things happen!

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

From there, just follow your bliss.

## Deployment

Ready to go world wide? Here's a guide to deployment! There are two
supported ways to deploy in Boilermaker:

* automatically, via continuous deployment with Travis.
* "manually", from your local machine via the `deploy` script.

Either way, you'll need to set up your deployment server to start.
The steps below are also covered in the CI/CD workshop.

### Heroku

1.  Set up the [Heroku command line tools][heroku-cli]
2.  `heroku login`
3.  Add a git remote for heroku:

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli

* **If you are creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a
      name in mind.
  2.  `heroku addons:create heroku-postgresql:hobby-dev` to add
      ("provision") a postgres database to your heroku dyno

* **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a
      collaborator on the app.

### Travis

_**NOTE**_ that this step assumes that Travis-CI is already testing your code.
Continuous Integration is not about testing per se – it's about _continuously
integrating_ your changes into the live application, instead of periodically
_releasing_ new versions. CI tools can not only test your code, but then
automatically deploy your app. This is known as Continuous Deployment.
Boilermaker comes with a `.travis.yml` configuration almost ready for
continuous deployment; follow these steps to the job.

1.  Run the following commands to create a new branch:

```
git checkout master
git pull
git checkout -b f/travis-deploy
```

2.  Run the following script to finish configuring `travis.yml` :
    `npm run heroku-token`
    This will use your `heroku` CLI (that you configured previously, if
    not then see [above](#Heroku)) to generate an authentication token. It
    will then use `openssl` to encrypt this token using a public key that
    Travis has generated for you. It will then update your `.travis.yml`
    file with the encrypted value to be sent with the `secure` key under
    the `api_key`.
3.  Run the following commands to commit these changes

```
git add .travis.yml
git commit -m 'travis: activate deployment'
git push -u origin f/travis-deploy
```

4.  Make a Pull Request for the new branch, get it approved, and merge it into
    the master branch.

_**NOTE**_ that this script depends on your local `origin` Git remote matching
your GitHub URL, and your local `heroku` remote matching the name of your
Heroku app. This is only an issue if you rename your GitHub organization,
repository name or Heroku app name. You can update these values using
`git remote` and its related commands.

#### Travis CLI

There is a procedure to complete the above steps by installing the official
[Travis CLI tools][travis-cli]. This requires a recent Ruby, but this step
should not be, strictly speaking, necessary. Only explore this option when the
above has failed.

[travis-cli]: https://github.com/travis-ci/travis.rb#installation

That's it! From now on, whenever `master` is updated on GitHub, Travis
will automatically push the app to Heroku for you.

### Cody's own deploy script

Your local copy of the application can be pushed up to Heroku at will,
using Boilermaker's handy deployment script:

1.  Make sure that all your work is fully committed and merged into your
    master branch on Github.
2.  If you currently have an existing branch called "deploy", delete
    it now (`git branch -d deploy`). We will use a dummy branch
    with the name `deploy` (see below), so and the script below will error if a
    branch with that name already exists.
3.  `npm run deploy`
    _ this will cause the following commands to happen in order:
    _ `git checkout -b deploy`: checks out a new branch called
    `deploy`. Note that the name `deploy` here is not magical, but it needs
    to match the name of the branch we specify when we push to our `heroku`
    remote.
    _ `webpack -p`: webpack will run in "production mode"
    _ `git add -f public/bundle.js public/bundle.js.map`: "force" add
    these files which are listed in `.gitignore`.
    _ `git commit --allow-empty -m 'Deploying'`: create a commit, even
    if nothing changed
    _ `git push --force heroku deploy:master`: push your local
    `deploy` branch to the `master` branch on `heroku`
    _ `git checkout master`: return to your master branch
    _ `git branch -D deploy`: remove the deploy branch

Now, you should be deployed!

Why do all of these steps? The big reason is because we don't want our
production server to be cluttered up with dev dependencies like
`webpack`, but at the same time we don't want our development
git-tracking to be cluttered with production build files like
`bundle.js`! By doing these steps, we make sure our development and
production environments both stay nice and clean!

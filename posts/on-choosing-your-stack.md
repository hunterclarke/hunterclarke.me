---
title: "On Choosing Your Stack"
excerpt: "Filmmakers and photographers often ask “What was that shot on?” Writers ask what software or note taking system is best. Musicians can spend days researching the best plugins for their production software. These are all very productive forms of not creating anything.We web developers have an equivalent: What’s the best tech stack?"
publishedDate: "2021-02-05"
---

_Note: The advice below applies when you are creating a product you intend to ship. It does not include investigating alternate technologies as learning opportunities or for fun. It also paints products with a broad brush. Sometimes technical decisions are made for you based on the requirements of what you’re trying to build._

Filmmakers and photographers often ask “What was that shot on?” Writers ask what software or note taking system is best. Musicians can spend days researching the best plugins for their production software. These are all very productive forms of not creating anything.

We web developers have an equivalent: **What’s the best tech stack?**

**Tech Stack**: a list of all the technology services used to build and run one single application.

I’m not one to prescribe technical solutions to folks who take sides in the stack argument. But there seems to be a lot of discussion around what stacks are “best.” Many times the most accepted advice is a mix between “it depends” and “whatever you know best.” But right behind that advice is a long list of trending libraries and buzzwords that are enticing. I find it very easy to get sucked into these discussions. I often find myself wasting hours of time trying to decide on the next best tech stack for a project.

To avoid falling into that trap here are some guidelines that I try to follow and need to be reminded of before I go down the rabbit hole.

## Domain logic is what matters

Domain logic (or business logic), is what makes up your product. It requires that you understand a market. It fills a need or solves a problem. It’s what users interact with or what they would identify as a product. This domain logic can live in a myriad of frameworks. It can run on any number of cloud providers that in turn run any number of operating systems (read: linux distros).

Everything that would be considered the tech “stack” is at best one degree removed from the domain logic. It’s a means of delivering the domain logic. Perhaps it even facilitates a lot of the domain logic. But it is never what makes your product useful.

## All other things equal, optimize for development speed

Rails vs Django vs Laravel. MySQL vs Postgres vs Mongo. AWS vs GCP vs Heroku. While each of these decisions have tradeoffs, many are subtle. But more importantly, problems typically only show themselves “at scale." But that kind of traffic is hard to get in the first place. If you make it your mission to have “scale” problems, you’ll have your hands full for quite a long time.

So if those decisions are effectively inconsequential at the start, optimize for development speed. Choose the framework you know best. Choose the platform that will offer you compute credits for bigger, faster machines. But make those decisions quickly and get to building product.

## Focus limited brain cycles on product

This is probably a more personal point than others in this post. However, I find that I have a time limit on the number of hours I can spend on development tasks in a week or in a month. Fiddling with infrastructure or writing out boilerplate depletes that reserve of time as much as building a feature or designing an interface.

The problem is that building product and solving domain problems is difficult. Often infrastructure and framework decisions seem more attractive. They’re endlessly optimizable. They don’t deal with the messy world of customers. But it’s important to remember why the stack is there in the first place.

## Infrastructure should reflect a problem solved in production

There will come a time when the product pushes up against the tech stack of choice. When this happens, it’s time to shop for solutions elsewhere. In this way, your stack evolves to the needs of the product. You might even realize why so many large companies have built these hyped technologies as they have grown.

This requires some discipline and honesty about how to solve certain problems. Does your frontend performance problem need to be solved with a react based, redux backed, GraphQL calling, but server rendered interface? Or could you get by with some smart caching and basic jQuery? I can’t answer that question. Perhaps you do need that kind of setup. But you probably don’t. Facebook built React when it reached Facebook level problems. If you reach Facebook level problems, those are great problems to have.

What's missing from this list? Drop me a note on [Twitter](https://twitter.com/hunterclarke) and I'll amend it.
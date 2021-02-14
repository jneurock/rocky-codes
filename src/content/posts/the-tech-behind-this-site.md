---
date: 2021-02-05
path: "/thoughts/tech-behind-this-site"
title: "The Tech Behind This Site"
---

When I set out to create this site, I knew I wanted some technology that made it
easy for me to write posts in
[Markdown](https://daringfireball.net/projects/markdown/). One of my first
thoughts was to set up [GitHub Pages](https://pages.github.com/), create a
[Jekyll](https://jekyllrb.com/) site and write away. Ultimately, I decided on
[Gatsby](https://www.gatsbyjs.com/).

Along with the ease of writing in Markdown, I wanted to try out some technology
I hadn’t used before. Jekyll satisfied that requirement but so did many of the
[Jamstack](https://jamstack.org) frameworks.

When I started to dig deeper I found Jekyll a bit unintuitive to theme and
discovered that "Pagination does not support tags or categories". I definitely
want the ability to do this so that limitation and the limitations of GitHub
Pages left me wanting to explore the Jamstack options.

### Vue Frameworks

I then turned my attention to a couple of [Vue](https://vuejs.org)-based
frameworks, namely: [Gridsome](https://gridsome.org) and
[VuePress](https://vuepress.vuejs.org). I really like Vue and had worked on an
app with it for over a year. That was Vue 2, though, and I really wanted to try
Vue 3.

#### VuePress

Since I had heard of VuePress before, I started there. After creating an empty
VuePress site and serving it up, I discovered that its "...default theme [is]
optimized for writing technical documentation..." and it seemed like it would a
lot of work to turn it into what I wanted.

#### Gridsome

Next, I tried Gridsome. I had never heard of it and was excited to give it a
try. Like so many libraries in the Vue ecosystem, the documentation was
excellent. I created an empty project and took a look around. I noticed that it
shipped with Vue 2 and, while great, I really wanted some Vue 3 experience.

### React Frameworks

I’m not the biggest fan of React. Most of my experience has been working on
[Ember](https://emberjs.com) and Vue apps. I really like Ember’s service layer
and dependency injection system which don’t exist in React and Vue contexts. My
Ember experience is one of the reasons I didn’t reach for
[empress-blog](https://empress-blog.netlify.app/);

With that noted, the idea of getting some more React experience is still very
exciting to me. I want to have a good understanding of what problems it’s good
at solving, best practices and shortcomings.

#### Gatsby

I had worked on a couple of Gatsby apps before but only on the smallest of
scales. A bug fix here and a small feature enhancement there hardly gave me a
solid understanding of what Gatsby does and why.

When I started digging into Gatsby, I was initially put off by the amount of
code I would need to prune after running `gatsby new rocky-codes`. I then
learned about Gatsby’s concept of
[starters](https://www.gatsbyjs.com/docs/conceptual/plugins-themes-and-starters/#what-is-a-starter)
and tried again with their bare bones hello world starter. This was more like
it.

After spending a little time with it, Gatsby proved to be flexible enough for me
to implement the features I wanted and it has plenty of plugins so I didn’t have
to re-invent any wheels.

<p class="margin-btm-0">
  In the end I chose Gatsby for a few reasons:
</p>

1. Learning more React appealed to me.
2. It had a good balance of boilerplate and plugins.
3. It had the flexibility for me to add a wide range of new features.

<br>

##### A Note on Next.js

Like Gatsby, I had a little bit of experience with [Next.js](https://nextjs.org)
before. Perhaps the only reason I went with Gatsby is that I tried it first and
found that it did everything I wanted it to do.

### Deployment

Since I decided against GitHub Pages, I wanted to explore some Jamstack
deployment platforms. The 2 that came to mind first were
[Netlify](https://netlify.com) and [Vercel](https://vercel.com). Similar to how
I ended up deciding to use Gatsby over Next.js, Netlify came first. I already
had a Netlify account and was familiar with some of the features.

### Other Considerations

Another technology I was interested in was
[Tailwind CSS](https://tailwindcss.com/). I didn’t want to reach for
[Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/) or
[Material Design](https://material.io/design), all of which I had used before.

Many years back, I created a system similar to Tailwind; though, it was far less
capable. It was great in some cases for modifying certain aspects of elements
but in most cases I found it polluted my templates too much for my taste.

That prior, similar experience and some of the complexity of incorporating
Tailwind left me feeling like avoiding it, for now. In the end, I wanted this
site to have a very minimalist design and some custom CSS worked just fine.

---

The code for this site is open source. If you’d like to dig into how things
work, feel free to visit
[github.com/jneurock/rocky-codes](https://github.com/jneurock/rocky-codes).

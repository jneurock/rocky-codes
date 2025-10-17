---
date: 2025-10-17
excerpt:
  "I, too, had fallen into the line of thinking that it should be simple to
  design simple things. If I struggled to arrive at a simple solution quickly, I
  felt like a failure."
path: "/thoughts/simple-is-hard"
title: "Simple Is Hard"
---

A while ago I was introduced to [htmx](https://htmx.org/) and found myself
diving into the rabbit hole of the [essays](https://htmx.org/essays/) on the
website, which I can recommend. Down this path I learned a lot more about the
[REST](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
architecture and eventually I stumbled upon a blog post containing this comment:

<blockquote>
  <div class="blockquote__badge">“</div>
  <p>
    &hellip; I think most people just make the mistake that it should be simple
    to design simple things. In reality, the effort required to design something
    is inversely proportional to the simplicity of the result.
  </p>
  <p>
    <br>
    —Roy Fielding: <cite>
      <a href="https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven#comment-724">
        REST APIs must be hypertext-driven
      </a>
    </cite>
  </p>
</blockquote>

When I read that, it was an epiphany. My experience solving problems always had
a refinement process but I, too, had fallen into the line of thinking that it
should be simple to design simple things. If I struggled to arrive at a simple
solution quickly, I felt like a failure.

There is also a profound implication when it comes to complexity: Could the
inverse of Roy’s assertion be true? It holds up well in my experience. Let me
rephrase it accordingly: “The haste required to design something is inversely
proportional to the complexity of the result.”

For example, a make-it-work approach under a tight deadline doesn’t often allow
room for thoughtful iteration; once we start down a path to a solution, the
pressure around us forces us to make things work, even if we have to add
ridiculous amounts of complexity to pull it off.

### How Simplicity Impacts Collaboration

If we rethink the effort required to arrive at a simple or complex solution, it
helps us set realistic expectations. Understanding that “simple” implies more
effort and “complex” implies less effort allows us to avoid unpleasant
surprises, especially from stakeholders.

To me, setting expectations is the most important collaboration skill. When
everyone is on the same page, there are no unpleasant surprises. The ability to
clearly communicate expectations is an advanced skill, and it takes a lot of
practice to master.

#### Kaboom

When expectations go unmet, the result can be quite dramatic. Though the subject
of the book [The Explosive Child](https://drrossgreene.com/the-explosive-child.htm)
is “Understanding and Parenting Easily Frustrated, Chronically Inflexible
Children”, I have found that much of the guidance applies just as well to
adults, even in a professional setting.

Throughout the book, the author provides examples of tense situations where
conversations go badly, ultimately resulting in _“kaboom”_. I will refer to this
later.

### Simplicity and the Live, Laugh, Love of Programming

Have you heard the idiom “Make it work. Make it right. Make it fast.”? Maybe
you’ve heard some variation? I call this the live, laugh, love of programming; I
could write an entire post on this topic, and I can imagine it in a cheesy font
hanging in a picture frame on my wall.

It describes the ideal software optimization process, and our reinterpretation
of simplicity fits into it nicely.

#### Make It Work

The first step in this process is about proving a concept. Making it work should
be done quickly so the idea can be validated before investing in it too much.
This is often where misunderstanding simplicity causes major problems, and
working quickly adds complexity.

If stakeholders assume that it should be simple to design simple things, then we
are in for a lot of pain when our idea is validated. A bad assumption that a
proof-of-concept is ready for production, or easy to make production ready, is
all too common. When those bad assumptions crash into reality, and expectations
go unmet&hellip; _kaboom_.

#### Make It Right

The second step in this process is about taking the solution from
proof-of-concept to production-ready. It _should_ take the most time. This is
the step where we can iterate toward the simplest design, but we need to be
mindful that “&hellip; the effort required to design something is inversely
proportional to the simplicity of the result.”

Sometimes, teams are forced to shorten or entirely skip this step. The result is
a mess. Complexity may have already crept into the Make It Work phase, but it
will certainly come knocking when the barely functioning solution that was
rushed out initially needs patch after patch to keep from breaking completely.

When teams feel blocked from taking their proof-of-concept to a reliable,
high quality product&hellip; _kaboom_.

#### Make It Fast

The final step in the process is optional. Does it need further optimization? If
not, do nothing. If performance optimization is necessary, the optimization
effort can pretty much go through the whole cycle again from the beginning. The
same principles apply: Low effort optimizations are _unlikely_ to be simple.

### The Value of Simplicity

It’s hard to understate the value of simplicity, even if most people assume that
it should be simple to design simple things. I think there’s another perspective
we can take to disprove this assumption.

Simplicity is often included in company, team, or individual values. To me,
these values should describe the things we are willing invest in. If designing
simple things was cheap and easy to come by, simplicity wouldn’t be very
valuable.

If we truly value simplicity, it means we are willing to pay for it,
and understanding that more simplicity means more effort is one key to setting
good expectations. This understanding also highlights the value of experience.

With more experience tends to come the ability to arrive at the simplest 
solution faster. Simple might still be hard, but it can get easier, and changing
how we think about it can massively improve our work lives.

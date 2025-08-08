---
layout: default
title: New by Release Date
permalink: /new-by-release-date/
---

<h1>New Android Games by Release Date</h1>

{% assign sorted_games = site.games | sort: "release_date" | reverse %}

{% for game in sorted_games %}
  <h2><a href="{{ game.url | relative_url }}">{{ game.title }}</a></h2>
  <p><strong>Release Date:</strong> {{ game.release_date | date: "%B %d, %Y" }}</p>
  <p><strong>Developer:</strong> {{ game.developer }}</p>
  <p><strong>Price:</strong> {{ game.price }}</p>
  {{ game.excerpt }}
  <p><a href="{{ game.url | relative_url }}">Read more</a></p>
  <hr>
{% endfor %}

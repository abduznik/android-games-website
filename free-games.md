---
layout: default
title: Free Games
permalink: /free-games/
---

<h1>Free Android Games</h1>

<ul class="game-list">
  {% assign free_games = site.games | where: "price", "Free" | sort: "release_date" %}
  {% if free_games.size == 0 %}
    <p>No free games found yet. Check back later!</p>
  {% else %}
    {% for game in free_games %}
      <li>
        <a href="{{ game.url | relative_url }}">{{ game.title }}</a>
        <br>
        <small>Developer: {{ game.developer }} | Release Date: {{ game.release_date | date: "%B %d, %Y" }}</small>
      </li>
    {% endfor %}
  {% endif %}
</ul>

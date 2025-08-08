---
layout: null
permalink: /random-game/
---
<script>
  const games = [
    {% for game in site.games %}
      "{{ game.url | relative_url }}",
    {% endfor %}
  ];
  const randomIndex = Math.floor(Math.random() * games.length);
  window.location.replace(games[randomIndex]);
</script>
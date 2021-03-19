---
layout: main
title: Reading Log
---

## {{ title }}

{% for year, books in readingLog | dictsort | reverse %}
  ### {{ year }}

  {% for book in books -%}
    {% if book.url -%}
      - [**_{{ book.title }}_**]({{ book.url }})
    {%- else -%}
      - **_{{ book.title }}_**
    {%- endif %}
    by {{ book.author }}
    {%- if book.isbn %}
      (ISBN: {{ book.isbn }})
    {% endif -%}\
    {%- if book.startDate %}
      Started on {{ book.startDate }}
      {% if book.finishDate %} – {% endif %}
    {%- endif %}
    {%- if book.finishDate %}
      Finished on {{ book.finishDate }}
    {% endif %}
  {% endfor %}
{% endfor %}

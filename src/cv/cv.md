---
layout: cv
title: CV
version: 4.0.0 (2021-03-23)
---

[rafael@rafael.me.uk](mailto:rafael@rafael.me.uk) –
[https://www.rafael.me.uk](https://www.rafael.me.uk) –
[https://github.com/rafaelalvessa](https://github.com/rafaelalvessa)

## Summary

- Five years of Web development.
- Three years of full-stack experience, including Python, Node.js and SQL.
- Three years of React and JavaScript experience.
- Experience working solo and with teams in start-ups and medium-sized
  enterprises.
- Three years of Agile software development.

## Work Experience

{% for position in workExperience %}
  **{{ position.title }}** ({{ position.startDate }} -
  {{ position.endDate | default("Present") }})\
  [{{ position.organisation }}]({{ position.website }}), {{ position.location }}

  {% for item in position.description -%}
    - {{ item }}
  {% endfor %}
{% endfor %}

## Education

{% for course in education -%}
  - **{{ course.title }}**, {{ course.institution }} ({{ course.endDate }})
{% endfor %}

## Open Source

{% for url in openSource -%}
  - {{ url | urlize | safe }}
{% endfor %}

## Skills

{% for skill in skills -%}
  - **{{ skill.title }}**: {{ skill.values | join(", ") }}
{% endfor %}

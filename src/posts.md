---
layout: page
title: בלוג
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl mx-auto lg:max-w-none">
    <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
      <% collections.posts.resources.each do |post| %>
          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="<%= relative_url post.data.pic.split("/src").last %>" alt="<%= post.data.alt %>" class="w-full h-full object-center object-cover">
            </div>
            <h3 class="mt-2 text-sm text-gray-500">
                <a href="<%= post.relative_url %>">
                <span class="absolute inset-0"></span>
                <%= post.data.categories.join(', ') %>
                </a>
            </h3>
            <p class="text-base font-semibold text-gray-900"><%= post.data.title %></p>
          </div>
      <% end %>
    </div>
  </div>
</div>
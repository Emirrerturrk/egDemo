---
name: laravel-filament-admin
description: Expert best practices for Laravel 11/12 and Filament v3/v4 admin panel development, resource management, media handling, relations, custom forms, and high-performance APIs.
---

# Laravel & Filament Admin Panel Best Practices

This skill guides the design, architecture, and implementation of the **Laravel + Filament** admin panel for the Mimar Ezgi Güven web platform.

---

## 1. Core Architecture & Stack

- **Framework**: Laravel 11+ / PHP 8.2+
- **Admin Panel**: Filament v3+ (TALL stack: Tailwind, Alpine.js, Laravel, Livewire)
- **Database**: PostgreSQL or MySQL
- **Media Library**: spatie/laravel-medialibrary + ilament/spatie-laravel-media-library-plugin
- **Slugs & SEO**: spatie/laravel-sluggable or automatic Eloquent mutators
- **Order / Sortable**: spatie/eloquent-sortable for reordering projects and products

---

## 2. Domain Models & Relationships

### A. Projects (Project)
- Fields: 	itle, slug, category, location, year, rea_sqm, description, services (array/tags), is_featured, order_column, meta_title, meta_description.
- Media Collections:
  - hero_image (single, high-res architectural crop)
  - gallery (multiple images with custom layout metadata)
  - drawings (architectural plans/sections)

### B. Products (Product)
- Fields: 	itle, slug, category, description, material, dimensions, inquiry_price_text, is_active, order_column.
- Media Collection: images (main & detail shots)

### C. Services (Service)
- Fields: 
umber (01, 02..), 	itle, subtitle, description, order_column.
- Media Collection: hover_image

### D. Inquiries / Leads (Inquiry)
- Fields: ull_name, email, phone, project_type, location, estimated_area, message, status (new, in_review, contacted, archived).

### E. Site Settings / Studio (Setting)
- Single-record manager or Spatie Settings for:
  - Studio manifesto & about story
  - Contact information (phone, email, address, Instagram URL)
  - SEO defaults

---

## 3. Filament Resources & UI Guidelines

1. **Clean & Editorial Admin UI**:
   - Match the studio's refined identity (minimalist tables, clear form sections).
   - Use Tabs or Section components to organize complex fields (Project Information, Gallery & Media, SEO Settings).

2. **Media Upload & Optimization**:
   - Use SpatieMediaLibraryFileUpload with conversion definitions (	humb, webp, vif, esponsive).
   - Enable image reordering via drag-and-drop.
   - Enforce WebP/AVIF responsive format generation upon upload.

3. **Table Configurations**:
   - Reorderable tables using eorderable('order_column').
   - Filters by category, featured status, and year.
   - Quick toggles (ToggleColumn for is_featured).

4. **API / Headless Endpoints**:
   - Expose clean JSON resources (ProjectResource, ProductResource, SettingsResource) for the frontend.
   - Utilize caching tags (projects_cache, settings_cache) invalidated on Filament Model Events (saved, deleted).

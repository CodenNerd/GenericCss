# 🖼️ Background Image Classes

#### **`.bg-image-${url}`**

- **Description:** Sets the background image of the element using the provided URL.
- **CSS equivalent:**
    ```css
    .bg-image-${url} {
      background-image: url("${url}");
    }
    ```
- **Example usage:**
    ```html
    <div class="bg-image-1">
      <!-- Content with background image using URL "1" -->
    </div>
    ```
    In the example above, the background image of the element will be set using the URL "1". Replace "1" with the desired URL.

    ---

#### **`.bg-image-none`**

- **Description:** Removes the background image from the element.

- **CSS equivalent:**
    ```css
    .bg-image-none {
      background-image: none;
    }
    ```
- **Example usage:**
    ```html
    <div class="bg-image-none">
      <!-- Content without a background image -->
    </div>
    ```
    In the example above, the background image of the element will be removed.

---    

These utility classes provide a convenient way to set or remove background images for elements. Use the `.bg-image-${url}` class to set a background image with a specific URL, and use the `.bg-image-none` class to remove the background image altogether.
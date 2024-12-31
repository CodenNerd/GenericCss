# 📱Breakpoints

These breakpoints ensure your web application remains responsive and adapts to different screen sizes.

**`sm`**
  - **Description:** Target screens that are 576px or wider, typically used for small mobile devices.
  
  - **CSS equivalent:**
    ```css
    @media (min-width: 576px) {
      /* Styles for small screens and larger */
    }
    ```
  - **Example usage:**
    ```html
    <div class="sm:text-14">Text size adjusts for small screens</div>
    ```

    ---  

**`md`**
  - **Description:** Target screens that are 768px or wider, typically used for tablets and smaller desktops.
  
  - **CSS equivalent:**
    ```css
    @media (min-width: 768px) {
      /* Styles for medium screens and larger */
    }
    ```
  - **Example usage:**
    ```html
    <div class="md:text-16">Text size adjusts for medium screens</div>
    ```

    ---

**`lg`**
  - **Description:** Target screens that are 992px or wider, typically used for larger tablets and desktops.
  
  - **CSS equivalent:**
    ```css
    @media (min-width: 992px) {
      /* Styles for large screens and larger */
    }
    ```
  - **Example usage:**
    ```html
    <div class="lg:text-18">Text size adjusts for large screens</div>
    ```

    ---

**`xl`**
  - **Description:** Target screens that are 1200px or wider, typically used for large desktops and monitors.
  
  - **CSS equivalent:**
    ```css
    @media (min-width: 1200px) {
      /* Styles for extra large screens and larger */
    }
    ```
  - **Example usage:**
    ```html
    <div class="xl:text-20">Larger text for extra large screens</div>
    ```
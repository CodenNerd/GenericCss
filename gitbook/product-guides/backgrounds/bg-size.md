# 📏 Background Size Classes  

#### **`.bg-auto`**  
- **Description:** Displays the background image at its original size.  
- **CSS equivalent:**  
    ```css
    .bg-auto {
      background-size: auto;
    }
    ```  
- **Example usage:**  
    ```html
    <div class="bg-auto">
      <!-- Content with background displayed at original size -->
    </div>
    ```
    In the example above, the background image of the element will retain its original dimensions.  

    ---  

#### **`.bg-cover`**  
- **Description:** Scales the background image to cover the entire element while maintaining its aspect ratio. Cropping may occur if necessary.  
- **CSS equivalent:**  
    ```css
    .bg-cover {
      background-size: cover;
    }
    ```  
- **Example usage:**  
    ```html
    <div class="bg-cover">
      <!-- Content with background image scaled to cover the element -->
    </div>
    ```
    In the example above, the background image is scaled to cover the element completely without distorting its aspect ratio.  

    ---  

#### **`.bg-contain`**  
- **Description:** Scales the background image to fit within the element while maintaining its aspect ratio. The entire image will always be visible.  
- **CSS equivalent:**  
    ```css
    .bg-contain {
      background-size: contain;
    }
    ```  
- **Example usage:**  
    ```html
    <div class="bg-contain">
      <!-- Content with background image scaled to fit within the element -->
    </div>
    ```
    In the example above, the background image is adjusted to fit within the element without cropping or distortion.  

    ---  

#### **`.bg-50`**  
- **Description:** Scales the background image to occupy 50% of the element's width and height.  
- **CSS equivalent:**  
    ```css
    .bg-50 {
      background-size: 50%;
    }
    ```  
- **Example usage:**  
    ```html
    <div class="bg-50">
      <!-- Content with background image occupying 50% of the element's width and height -->
    </div>
    ```
    In the example above, the background image is scaled to occupy half the size of the element.  

    ---  

#### **`.bg-100`**  
- **Description:** Scales the background image to fully occupy 100% of the element's width and height.  

- **CSS equivalent:**  
    ```css
    .bg-100 {
      background-size: 100%;
    }
    ```  
- **Example usage:**  
    ```html
    <div class="bg-100">
      <!-- Content with background image occupying 100% of the element's width and height -->
    </div>
    ```
    In the example above, the background image is stretched to fully fill the element.  

---      

These utility classes offer flexibility to control the background size of elements, enabling easy customization of how the background image is displayed and scaled within its container.
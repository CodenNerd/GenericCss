# 🧭 **Z-Index Classes**

#### **`.z-index-{value}`, `.z-{value}`**  
- **Description:** Sets the z-index property to the specified positive value, adjusting the stacking order of the element.  
- **CSS equivalent:**  
  ```css
  z-index: {value};
  ```  
- **Example usage:**  
  ```html
  <div class="z-index-1">
    <!-- Content with z-index 1 -->
  </div>
  ```  
  or  
  ```html
  <div class="z-1">
    <!-- Content with z-index 1 -->
  </div>
  ```  

  ---

#### **`.z-index--{value}`, `.z--{value}`**  
- **Description:** Sets the z-index property to the specified negative value, adjusting the stacking order of the element.  

- **CSS equivalent:**  
  ```css
  z-index: -{value};
  ```  
- **Example usage:**  
  ```html
  <div class="z-index--1">
    <!-- Content with z-index -1 -->
  </div>
  ```  
  or  
  ```html
  <div class="z--1">
    <!-- Content with z-index -1 -->
  </div>
  ```  

---  

These utility classes allow you to easily control the stacking order of elements by specifying their z-index values. Positive values bring elements forward in the stacking order, while negative values send elements backward.
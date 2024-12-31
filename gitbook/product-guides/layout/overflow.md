# 🔲 Overflow Utility Classes

#### **`.overflow-hidden`**  
- **Description:** Applies the `overflow: hidden` property to hide overflowing content within an element.  
- **CSS equivalent:**  
  ```css
  overflow: hidden;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-hidden">
    <!-- Content with hidden overflow -->
  </div>
  ```  

  ---

#### **`.scroll-y`**  
- **Description:** Applies the `overflow-y: scroll` property to enable vertical scrolling when the content exceeds the height of the element.  
- **CSS equivalent:**  
  ```css
  overflow-y: scroll;
  ```  
- **Example usage:**  
  ```html
  <div class="scroll-y">
    <!-- Content with vertical scrolling -->
  </div>
  ```  

  ---

#### **`.scroll-x`**  
- **Description:** Applies the `overflow-x: scroll` property to enable horizontal scrolling when the content exceeds the width of the element.  
- **CSS equivalent:**  
  ```css
  overflow-x: scroll;
  ```  
- **Example usage:**  
  ```html
  <div class="scroll-x">
    <!-- Content with horizontal scrolling -->
  </div>
  ```  

  ---

#### **`.overflow-x-clip`**  
- **Description:** Applies the `overflow-x: clip` property to clip overflowing content horizontally.  
- **CSS equivalent:**  
  ```css
  overflow-x: clip;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-x-clip">
    <!-- Content with clipped horizontal overflow -->
  </div>
  ```  

  ---

#### **`.overflow-y-clip`**  
- **Description:** Applies the `overflow-y: clip` property to clip overflowing content vertically.  
- **CSS equivalent:**  
  ```css
  overflow-y: clip;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-y-clip">
    <!-- Content with clipped vertical overflow -->
  </div>
  ```  

  ---

#### **`.overflow-clip`**  
- **Description:** Applies the `overflow: clip` property to clip overflowing content both horizontally and vertically.  
- **CSS equivalent:**  
  ```css
  overflow: clip;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-clip">
    <!-- Content with clipped overflow in both directions -->
  </div>
  ```  

  ---

#### **`.overflow-visible`**  
- **Description:** Applies the `overflow: visible` property to allow overflowing content to be visible outside the element.  
- **CSS equivalent:**  
  ```css
  overflow: visible;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-visible">
    <!-- Content with visible overflow -->
  </div>
  ```  

  ---

#### **`.overflow-auto`**  
- **Description:** Applies the `overflow: auto` property to enable automatic scrolling when the content exceeds the size of the element.  
- **CSS equivalent:**  
  ```css
  overflow: auto;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-auto">
    <!-- Content with automatic scrolling when necessary -->
  </div>
  ```  

  ---

#### **`.overflow-x-visible`**  
- **Description:** Applies the `overflow-x: visible` property to allow horizontal overflowing content to be visible.  
- **CSS equivalent:**  
  ```css
  overflow-x: visible;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-x-visible">
    <!-- Content with visible horizontal overflow -->
  </div>
  ```  

  ---

#### **`.overflow-x-auto`**  
- **Description:** Applies the `overflow-x: auto` property to enable automatic horizontal scrolling when the content exceeds the width of the element.  
- **CSS equivalent:**  
  ```css
  overflow-x: auto;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-x-auto">
    <!-- Content with automatic horizontal scrolling when necessary -->
  </div>
  ```  

  ---

#### **`.overflow-y-visible`**  
- **Description:** Applies the `overflow-y: visible` property to allow vertical overflowing content to be visible.  
- **CSS equivalent:**  
  ```css
  overflow-y: visible;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-y-visible">
    <!-- Content with visible vertical overflow -->
  </div>
  ```  

  ---

#### **`.overflow-y-auto`**  
- **Description:** Applies the `overflow-y: auto` property to enable automatic vertical scrolling when the content exceeds the height of the element.  
- **CSS equivalent:**  
  ```css
  overflow-y: auto;
  ```  
- **Example usage:**  
  ```html
  <div class="overflow-y-auto">
    <!-- Content with automatic vertical scrolling when necessary -->
  </div>
  ```  

  ---

#### **`.no-scrollbar`**  
- **Description:** Removes both horizontal and vertical scrollbars, making the content scrollable without visible scrollbars.  
- **CSS equivalent:**  
  ```css
  .no-scrollbar::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    display: none;
  }
  ```  
- **Example usage:**  
  ```html
  <div class="no-scrollbar">
    <!-- Content with hidden scrollbars -->
  </div>
  ```
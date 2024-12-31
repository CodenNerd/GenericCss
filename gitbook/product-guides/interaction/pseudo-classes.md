# 🔀Pseudo-Classes

### **Hover, Focus, and Active**

These pseudo-classes apply styles based on user interactions with elements.

- **`:hover`**
  - **Description:** Applied when the user hovers over an element with a pointing device.
  
  - **CSS equivalent:**
    ```css
    button:hover {
      background-color: green;
    }
    ```
  - **Example usage:**
    ```html
    <button class="hover:bg-green">button with green background on hover</button>
    ```

    ---

- **`:active`**
  - **Description:** Applied when the element is being activated (e.g., clicked or selected).
  
  - **CSS equivalent:**
    ```css
    button:active {
      background-color: darkgreen;
    }
    ```
  - **Example usage:**
    ```html
    <button class="active:bg-darkgreen">button with darker green background when clicked</button>
    ```

    ---

- **`:focus`**
  - **Description:** Applied when an element has gained focus.
  
  - **CSS equivalent:**
    ```css
    input:focus {
      border-color: green;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="focus:border-green" placeholder="focused input" />
    ```

    ---

- **`:focus-visible`**
  - **Description:** Applied when an element has gained focus and is visible.
  
  - **CSS equivalent:**
    ```css
    input:focus-visible {
      outline: 2px solid green;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="focus-visible:outline-green" placeholder="visible focus input" />
    ```

---

### **Element Positioning**

These pseudo-classes target elements based on their position or structure within the DOM.

- **`:first-child`**
  - **Description:** Applied to the first child of a parent element.
  
  - **CSS equivalent:**
    ```css
    p:first-child {
      font-weight: bold;
    }
    ```
  - **Example usage:**
    ```html
    <div>
      <p class="first-child:bold">First paragraph</p>
      <p>Second paragraph</p>
    </div>
    ```

    ---

- **`:last-child`**
  - **Description:** Applied to the last child of a parent element.
  
  - **CSS equivalent:**
    ```css
    p:last-child {
      margin-bottom: 0;
    }
    ```
  - **Example usage:**
    ```html
    <div>
      <p>First paragraph</p>
      <p class="last-child:mb-0">Last paragraph</p>
    </div>
    ```

    ---

- **`:nth-child(...)`**
  - **Description:** Applied to elements based on their position within a parent element (e.g., every third item).
  
  - **CSS equivalent:**
    ```css
    li:nth-child(odd) {
      background-color: #f2f2f2;
    }
    ```
  - **Example usage:**
    ```html
    <ul>
      <li class="nth-child(odd):bg-white">Item 1</li>
      <li class="nth-child(even):bg-#f2f2f2">Item 2</li>
    </ul>
    ```

    ---

- **`:nth-last-child(...)`**
  - **Description:** Applied to elements based on their position from the last child of a parent element.
  
  - **CSS equivalent:**
    ```css
    li:nth-last-child(2) {
      background-color: #f2f2f2;
    }
    ```
  - **Example usage:**
    ```html
    <ul>
      <li>Item 1</li>
      <li class="nth-last-child(2):bg-#f2f2f2">Item 2</li>
      <li>Item 3</li>
    </ul>
    ```

    ---

- **`:first-of-type`**
  - **Description:** Applied to the first element of its type within a parent.
  
  - **CSS equivalent:**
    ```css
    p:first-of-type {
      font-size: 18px;
    }
    ```
  - **Example usage:**
    ```html
    <div>
      <p class="first-of-type:text-18">First paragraph</p>
      <p>Second paragraph</p>
    </div>
    ```

    ---

- **`:last-of-type`**
  - **Description:** Applied to the last element of its type within a parent.
  
  - **CSS equivalent:**
    ```css
    p:last-of-type {
      margin-bottom: 0;
    }
    ```
  - **Example usage:**
    ```html
    <div>
      <p>First paragraph</p>
      <p class="last-of-type:mb-0">Last paragraph</p>
    </div>
    ```

    ---

- **`:only-child`**
  - **Description:** Applied to an element that is the only child of its parent.
  
  - **CSS equivalent:**
    ```css
    p:only-child {
      text-align: center;
    }
    ```
  - **Example usage:**
    ```html
    <div>
      <p class="only-child:text-center">Only paragraph</p>
    </div>
    ```

    ---

- **`:only-of-type`**
  - **Description:** Applied to an element that is the only one of its type within its parent.
  
  - **CSS equivalent:**
    ```css
    p:only-of-type {
      font-size: 20px;
    }
    ```
  - **Example usage:**
    ```html
    <div>
      <p class="only-of-type:text-20">Only paragraph of its type</p>
    </div>
    ```

---

### **Form States**

These pseudo-classes apply styles based on the state of form elements.

- **`:checked`**
  - **Description:** Applied to elements (such as checkboxes or radio buttons) that are checked.
  
  - **CSS equivalent:**
    ```css
    input:checked {
      background-color: green;
    }
    ```
  - **Example usage:**
    ```html
    <input type="checkbox" class="checked:bg-success" checked />
    ```

    ---

- **`:disabled`**
  - **Description:** Applied to disabled form elements.
  
  - **CSS equivalent:**
    ```css
    input:disabled {
      background-color: #ccc;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="disabled:bg-gray" disabled />
    ```

    ---

- **`:enabled`**
  - **Description:** Applied to enabled form elements.
  
  - **CSS equivalent:**
    ```css
    input:enabled {
      background-color: #fff;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="enabled:bg-white" />
    ```

    ---

- **`:required`**
  - **Description:** Applied to form elements that are required.
  
  - **CSS equivalent:**
    ```css
    input:required {
      border-color: red;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="required:border-red" required />
    ```

    ---

- **`:optional`**
  - **Description:** Applied to form elements that are optional.
  
  - **CSS equivalent:**
    ```css
    input:optional {
      border-color: green;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="optional:border-green" />
    ```

    ---

- **`:valid`**
  - **Description:** Applied to form elements that contain valid input.
  
  - **CSS equivalent:**
    ```css
    input:valid {
      border-color: green;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="valid:border-success" />
    ```

    ---

- **`:invalid`**
  - **Description:** Applied to form elements that contain invalid input.
  
  - **CSS equivalent:**
    ```css
    input:invalid {
      border-color: red;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="invalid:border-danger />
    ```

    ---

- **`:read-only`**
  - **Description:** Applied to form elements that are read-only.
  
  - **CSS equivalent:**
    ```css
    input:read-only {
      background-color: #f9f9f9;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="read-only:bg-lightgray" readonly />
    ```

    ---

- **`:read-write`**
  - **Description:** Applied to form elements that are editable.
  
  - **CSS equivalent:**
    ```css
    input:read-write {
      background-color: #fff;
    }
    ```
  - **Example usage:**
    ```html
    <input type="text" class="read-write:bg-white" />
    ```

    ---

- **`:in-range`**
  - **Description:** Applied to form elements that have a value within the specified range.
  
  - **CSS equivalent:**
    ```css
    input:in-range {
      background-color: lightgreen;
    }
    ```
  - **Example usage:**
    ```html
    <input type="number" class="in-range:bg-lightgreen" min="1" max="10" />
    ```

    ---

- **`:out-of-range`**
  - **Description:** Applied to form elements that have a value outside the specified range.
  
  - **CSS equivalent:**
    ```css
    input:out-of-range {
      background-color: lightcoral;
    }
    ```
  - **Example usage:**
    ```html
    <input type="number" class="out-of-range:bg-lightcoral" min="1" max="10" />
    ```

---

### **State-Based Pseudo-Classes**

These pseudo-classes apply styles depending on the different states or conditions of elements.

- **`:target`**
  - **Description:** Applied when an element is the target of a fragment identifier in the URL.
  
  - **CSS equivalent:**
    ```css
    #section:target {
      background-color: yellow;
    }
    ```
  - **Example usage:**
    ```html
    <div id="section" class="target:bg-yellow">Targeted section</div>
    ```

    ---

- **`:root`**
  - **Description:** Applied to the root element of a document, typically `<html>`.
  
  - **CSS equivalent:**
    ```css
    :root {
      --main-color: green;
    }
    ```
  - **Example usage:**
    ```html
    <div class="root:main-color">Content using root variable</div>
    ```

    ---

- **`:not(...)`**
  - **Description:** Applied to elements that do not match the given selector.
  
  - **CSS equivalent:**
    ```css
    div:not(p) {
      background-color: lightgray;
    }
    ```
  - **Example usage:**
    ```html
    <div class="not(p):bg-lightgray">Div without 'special' class</div>
    ```

    ---

- **`:empty`**
  - **Description:** Applied to elements that have no children (including text).
  
  - **CSS equivalent:**
    ```css
    div:empty {
      display: none;
    }
    ```
  - **Example usage:**
    ```html
    <div class="empty:hidden">Empty div</div>
    ```

    ---

- **`:any-link`**
  - **Description:** Applied to any element that is a link, including visited or unvisited.
  
  - **CSS equivalent:**
    ```css
    a:any-link {
      color: blue;
    }
    ```
  - **Example usage:**
    ```html
    <a class="any-link:text-blue" href="#">Link</a>
    ```

    ---

- **`:visited`**
  - **Description:** Applied to links that have been visited by the user.
  
  - **CSS equivalent:**
    ```css
    a:visited {
      color: purple;
    }
    ```
  - **Example usage:**
    ```html
    <a class="visited:text-purple" href="#">Visited link</a>
    ```

    ---

- **`:future`**
  - **Description:** Applied to elements that are in the future (e.g., elements in a date or time range).
  
  - **CSS equivalent:**
    ```css
    .future {
      color: gray;
    }
    ```
  - **Example usage:**
    ```html
    <div class="future:text-gray">Future element</div>
    ```

    ---

- **`:past`**
  - **Description:** Applied to elements that are in the past.
  
  - **CSS equivalent:**
    ```css
    .past {
      color: red;
    }
    ```
  - **Example usage:**
    ```html
    <div class="past:text-red">Past element</div>
    ```
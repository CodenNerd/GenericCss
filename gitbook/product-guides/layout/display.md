# 🖥️ Display Classes

#### **`.block`**  
- **Description:** Sets the display property to `block`, making the element a block-level element. It takes up the full width available and starts on a new line.  

- **CSS equivalent:**  
  ```css
  display: block;
  ```  

- **Example usage:**  
  ```html
  <div class="block">This element is displayed as a block.</div>
  ```  

    ---

#### **`.inline-block`**  
- **Description:** Sets the display property to `inline-block`, making the element an inline-level block container. It takes up only as much width as necessary and allows other elements to be placed next to it.  

- **CSS equivalent:**  
  ```css
  display: inline-block;
  ```  

- **Example usage:**  
  ```html
  <div class="inline-block">This element is displayed as an inline block.</div>
  ```  

    ---

#### **`.inline`**  
- **Description:** Sets the display property to `inline`, making the element an inline-level element. It takes up only as much width as necessary and allows other elements to be placed next to it.  

- **CSS equivalent:**  
  ```css
  display: inline;
  ```  

- **Example usage:**  
  ```html
  <span class="inline">This element is displayed inline.</span>
  ```  

    ---

#### **`.hidden`**  
- **Description:** Sets the display property to `none`, hiding the element from the page layout. The element will not be rendered and will not take up any space.  

- **CSS equivalent:**  
  ```css
  display: none;
  ```  

- **Example usage:**  
  ```html
  <div class="hidden">This element is hidden.</div>
  ```  

    ---

#### **`.grid`**  
- **Description:** Sets the display property to `grid`, making the element a grid container. It creates a grid layout where child elements can be placed in rows and columns.  

- **CSS equivalent:**  
  ```css
  display: grid;
  ```  

- **Example usage:**  
  ```html
  <div class="grid">This element is displayed as a grid container.</div>
  ```  

    ---

#### **`.inline-grid`**  
- **Description:** Sets the display property to `inline-grid`, making the element an inline-level grid container. It enables grid layout for its child elements while allowing the element to flow inline with surrounding content.  

- **CSS equivalent:**  
  ```css
  display: inline-grid;
  ```  

- **Example usage:**  
  ```html
  <div class="inline-grid">This element is displayed as an inline grid container.</div>
  ```  

    ---

#### **`.flex`**  
- **Description:** Sets the display property to `flex`, making the element a flex container. It enables flexible box layout for its child elements, allowing them to be easily aligned and rearranged.  

- **CSS equivalent:**  
  ```css
  display: flex;
  ```  

- **Example usage:**  
  ```html
  <div class="flex">This element is displayed as a flex container.</div>
  ```  

    ---

#### **`.inline-flex`**  
- **Description:** Sets the display property to `inline-flex`, making the element an inline-level flex container. It enables flexible box layout for its child elements while allowing other elements to be placed next to it.  

- **CSS equivalent:**  
  ```css
  display: inline-flex;
  ```  

- **Example usage:**  
  ```html
  <div class="inline-flex">This element is displayed as an inline flex container.</div>
  ```  

    ---

#### **`.table`**  
- **Description:** Sets the display property to `table`, making the element a table. This allows child elements to behave as table components such as rows and cells.  

- **CSS equivalent:**  
  ```css
  display: table;
  ```  

- **Example usage:**  
  ```html
  <div class="table">This element is displayed as a table.</div>
  ```  

    ---

#### **`.inline-table`**  
- **Description:** Sets the display property to `inline-table`, making the element as an inline-level table. It allows the element to flow within the content while still behaving like a table.  

- **CSS equivalent:**  
  ```css
  display: inline-table;
  ```  

- **Example usage:**  
  ```html
  <div class="inline-table">This element is displayed as an inline table.</div>
  ```  

    ---

#### **`.table-caption`**  
- **Description:** Sets the display property to `table-caption`, making the element behave as a caption for a table.  

- **CSS equivalent:**  
  ```css
  display: table-caption;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-caption">Table Caption</div>
  </div>
  ```  

    ---

#### **`.table-column`**  
- **Description:** Sets the display property to `table-column`, making the element behave as a column within a table.  

- **CSS equivalent:**  
  ```css
  display: table-column;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-column">Column 1</div>
    <div class="table-column">Column 2</div>
  </div>
  ```  

    ---

#### **`.table-row`**  
- **Description:** Sets the display property to `table-row`, making the element behave as a row within a table.  

- **CSS equivalent:**  
  ```css
  display: table-row;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-row">Row 1</div>
    <div class="table-row">Row 2</div>
  </div>
  ```  

    ---

#### **`.table-cell`**  
- **Description:** Sets the display property to `table-cell`, making the element behave like a table cell.  

- **CSS equivalent:**  
  ```css
  display: table-cell;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-row">
      <div class="table-cell">Cell 1</div>
      <div class="table-cell">Cell 2</div>
    </div>
  </div>
  ```  

    ---

#### **`.table-column-group`**  
- **Description:** Sets the display property to `table-column-group`, making the element behave as a container for column elements.  

- **CSS equivalent:**  
  ```css
  display: table-column-group;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-column-group">
      ...
    </div>
  </div>
  ```  

    ---

#### **`.table-row-group`**  
- **Description:** Sets the display property to `table-row-group`, making the element behave as a container for row elements.  

- **CSS equivalent:**  
  ```css
  display: table-row-group;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-row-group">
      ...
    </div>
  </div>
  ```  

    ---

#### **`.table-header-group`**  
- **Description:** Sets the display property to `table-header-group`, creating a group of header rows within a table.  

- **CSS equivalent:**  
  ```css
  display: table-header-group;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-header-group">
      ...
    </div>
  </div>
  ```  

    ---

#### **`.table-footer-group`**  
- **Description:** Sets the display property to `table-footer-group`, creating a group of footer rows within a table.  

- **CSS equivalent:**  
  ```css
  display: table-footer-group;
  ```  

- **Example usage:**  
  ```html
  <div class="table">
    <div class="table-footer-group">
      ...
    </div>
  </div>
  ```  

    ---

#### **`.list-item`**  
- **Description:** Sets the display property to `list-item`, making the element behave as a list item.  

- **CSS equivalent:**  
  ```css
  display: list-item;
  ```  

- **Example usage:**  
  ```html
  <ul>
    <li class="list-item">List Item 1</li>
    <li class="list-item">List Item 2</li>
  </ul>
  ```  

---    

These classes allow you to control the display behavior of elements, defining how they interact with other elements in the layout. Use them to achieve different layout structures and alignment effects within your design.
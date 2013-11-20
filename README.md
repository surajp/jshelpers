This repository contains javascript helper functions. 

#jqueryTableSort.js
-- Function for sorting table rows using jquery.
-- First click sorts in an ascending order and the next in a descending order.
-- The table must be constructed using correct semantics ( thead, ,th, tbody, etc) 
-- The table to be sorted must have an id of "sortable" and the sortable columns should have a class of 'clickable'.

eg:
<table id="sortable">
  <thead>
    <tr>
      <th class="clickable">Name</th>
      <th class="clickable">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Jack < /td>
      <td> 20 </td>
    </tr>
    <tr>
      <td> Jim < /td>
      <td> 25 </td>
    </tr>
    <tr>
      <td> Mary < /td>
      <td> 23 </td>
    </tr>
    <tr>
      <td> Bob< /td>
      <td> 30 </td>
    </tr>
  </tbody>
</table>


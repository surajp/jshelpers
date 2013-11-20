This repository contains javascript helper functions. 

#jqueryTableSort.js
<br> Function for sorting table rows using jquery.
<br> First click sorts in an ascending order and the next in a descending order.
<br> The table must be constructed using correct semantics ( thead, ,th, tbody, etc) 
<br> The table to be sorted must have an id of "sortable" and the sortable columns should have a class of 'clickable'.

eg:
&lt;table id="sortable"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th class="clickable"&gt;Name&lt;/th&gt;
      &lt;th class="clickable"&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt; Jack &lt; /td&gt;
      &lt;td&gt; 20 &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt; Jim &lt; /td&gt;
      &lt;td&gt; 25 &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt; Mary &lt; /td&gt;
      &lt;td&gt; 23 &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt; Bob&lt; /td&gt;
      &lt;td&gt; 30 &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;


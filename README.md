This repository contains javascript helper functions. 

#jqueryTableSort.js
<br> Function for sorting table rows using jquery.
<br> First click sorts in an ascending order and the next in a descending order.
<br> The table must be constructed using correct semantics ( thead, ,th, tbody, etc) 
<br> The table to be sorted must have an id of "sortable" and the sortable columns should have a class of 'clickable'.

eg:
&lt;table id="sortable"&gt;<br>
  &lt;thead&gt;<br>
    &lt;tr&gt;<br>
      &lt;th class="clickable"&gt;Name&lt;/th&gt;<br>
      &lt;th class="clickable"&gt;Age&lt;/th&gt;<br>
    &lt;/tr&gt;<br>
  &lt;/thead&gt;<br>
  &lt;tbody&gt;<br>
    &lt;tr&gt;<br>
      &lt;td&gt; Jack &lt; /td&gt;<br>
      &lt;td&gt; 20 &lt;/td&gt;<br>
    &lt;/tr&gt;<br>
    &lt;tr&gt;<br>
      &lt;td&gt; Jim &lt; /td&gt;<br>
      &lt;td&gt; 25 &lt;/td&gt;<br>
    &lt;/tr&gt;<br>
    &lt;tr&gt;<br>
      &lt;td&gt; Mary &lt; /td&gt;<br>
      &lt;td&gt; 23 &lt;/td&gt;<br>
    &lt;/tr&gt;<br>
    &lt;tr&gt;<br>
      &lt;td&gt; Bob&lt; /td&gt;<br>
      &lt;td&gt; 30 &lt;/td&gt;<br>
    &lt;/tr&gt;<br>
  &lt;/tbody&gt;<br>
&lt;/table&gt;

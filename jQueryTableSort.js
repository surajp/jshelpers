$('table#sortable  thead  th.clickable').click(function(){
      var asc=$(this).hasClass('asc');
          $(this).toggleClass('asc');
              var index=$(this).index();
                  var tbody=$(this).parent('tr').parent('thead').next('tbody');
                      var rows=tbody.children('tr');
                          rows.sort(function(a,b){
                                    var textA=$('td:eq('+index+')',a).text();
                                              var textB=$('td:eq('+index+')',b).text();
                                                        if(!isNaN(textA)&&!isNaN(textB)){
                                                                      var res= parseInt(textA) > parseInt(textB);
                                                                                  return asc ? res: !res;
                                                                                          }else
                                                                                                      return asc ? (textA > textB): (textB > textA);
                                                                                                          });
                                                  rows.each(function(){
                                                            tbody.append($(this));
                                                                });
                                                  });

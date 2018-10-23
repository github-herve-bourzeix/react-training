<?php
$link = mysql_connect('mysql_host', 'mysql_user', 'mysql_password')
$query = 'SELECT * FROM my_table';
$result = mysql_query($query)
echo "<table>\n";
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";
?>

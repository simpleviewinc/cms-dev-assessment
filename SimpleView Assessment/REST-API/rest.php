<?php
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://sv-reqres.now.sh/api/listings/',
   
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
$json = json_decode($resp, TRUE);
$artist = $json['data'];

foreach($artist as $item) { 

?>
 <div class="column listings">
    <div class="content">
      <div class="container">
	  <?php
	  if (file_exists($item['mediaurl'])) {
	  ?>
        <img src="<?php echo $item['mediaurl'];  ?>" alt="PlaceHolder Image" style="width:100%">
		<?php
	  }
	  else
		  
		  {
			?>
			 <img src="https://via.placeholder.com/350x150" alt="PlaceHolder Image" style="width:100%">
<?php			
		  }
		
		?>
        <div class="middle">
          <div class="text">Read More!</div>
          </div>
        </div>
      <h4><?php echo $item['title'];  ?></h4>
      <p><?php echo $item['description'];  ?>..</p>
        
    </div>
  </div>
 
<?php
}
// Close request to clear up some resources
curl_close($curl);
?>

<?php
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://sv-reqres.now.sh/api/offers/',
   
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
$json = json_decode($resp, TRUE);
$artist = $json['data'];

foreach($artist as $item) { 

?>
 <div class="column offers">
    <div class="content">
      <div class="container">
	  
       <?php
	  if (file_exists($item['mediaurl'])) {
	  ?>
        <img src="<?php echo $item['mediaurl'];  ?>" alt="PlaceHolder Image" style="width:100%">
		<?php
	  }
	  else
		  
		  {
			?>
			 <img src="https://via.placeholder.com/350x150" alt="PlaceHolder Image" style="width:100%">
<?php			
		  }
		
		?>
        <div class="middle">
          <div class="text">Read More!</div>
          </div>
        </div>
      <h4><?php echo $item['title'];  ?></h4>
      <p><?php echo $item['description'];  ?>..</p>
        
    </div>
  </div>
 
<?php
}
// Close request to clear up some resources
curl_close($curl);
?>

<?php
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://sv-reqres.now.sh/api/events/',
   
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
$json = json_decode($resp, TRUE);
$artist = $json['data'];

foreach($artist as $item) { 

?>
 <div class="column events">
    <div class="content">
      <div class="container">
	  
        <?php
	  if (file_exists($item['mediaurl'])) {
	  ?>
        <img src="<?php echo $item['mediaurl'];  ?>" alt="PlaceHolder Image" style="width:100%">
		<?php
	  }
	  else
		  
		  {
			?>
			 <img src="https://via.placeholder.com/350x150" alt="PlaceHolder Image" style="width:100%">
<?php			
		  }
		
		?>
        <div class="middle">
          <div class="text">Read More!</div>
          </div>
        </div>
      <h4><?php echo $item['title'];  ?></h4>
      <p><?php echo $item['description'];  ?>..</p>
        
    </div>
  </div>
 
<?php
}
// Close request to clear up some resources
curl_close($curl);
?>
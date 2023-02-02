export default function FoodTracker() {
  return (
	<div className='tracker-container'>
	  <br/>
	  <form>
	  <table>
		<tr>
						<td><label for='food'>Food</label></td>
						<td><input id='food' type='text'/></td>
					</tr>
					<tr>
						<td><label for='desc'>Description </label></td>
						<td><input id='desc' type='text'/></td>
					</tr>
					<tr>
						<td><label for='cat'>Category</label></td>
						<td>
							<select id='cat'>
							<option>Breakfast</option>
							<option>Lunch</option>
							<option>Dinner</option>
							<option>Snack</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label for='datetime'>Time</label></td>
						<td>
							<input id='datetime' type='datetime-local'/>
						</td>
					</tr>
					<tr>
						<td/>
						<td><input id='sub' type='submit' value='Add Entry'/></td>
					</tr>
	  </table>
	  </form>
	</div>
  );
}
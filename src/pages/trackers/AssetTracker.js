export default function PurchaseTracker() {
	return (
		<div className='tracker-container'>
			<br/>
			<form>
				<table>
					<tr>
						<td><label for='item'>Item</label></td>
						<td><input id='item' type='text'/></td>
					</tr>
					<tr>
						<td><label for='desc'>Description </label></td>
						<td><input id='desc' type='text'/></td>
					</tr>
					<tr>
						<td><label for='cost'>Cost </label></td>
						<td><input id='Cost' type='number'/></td>
					</tr>
					<tr>
						<td><label for='cat'>Category</label></td>
						<td>
							<select id='cat'>
							<option>Entertainment</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label for='subcat'>Sub Category</label></td>
						<td>
							<select id='subcat'>
							<option>Gaming</option>
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
						<td><label for='attach'>Attach Photos</label></td>
						<td><input id='photos' type='file'  accept='.png,.heif' multiple/></td>
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
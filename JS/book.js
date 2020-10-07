function find() {
	var book = document.getElementById('book').value;
	if (book == '') {
		alert('Please Enter A Valid Book Info')
	}else{
		fetch('https://www.googleapis.com/books/v1/volumes?q=' +book)
		.then(res =>{
			return res.json();
		})
		.then(result => {
			var html = '<p>';
			for(var i = 0; i < result.items.length; i++){
				volInf = result.items[i].volumeInfo;
				title = volInf.title;
				description = volInf.description;
				author = volInf.authors;
				html += 'Book Title: ' + title + '<br><br> Book description:' + description + '<br><br> authors: '+ author + '<hr>';

			}
			html += '<p>';
			document.getElementById('books').innerHTML = html;
		})
		.catch(error => {
			console.log(error)
		})
	}
}

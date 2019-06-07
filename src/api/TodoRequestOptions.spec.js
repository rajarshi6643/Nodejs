const chai = require('chai')
	, expect = chai.expect
	, TodoRequestOptions = require('./TodoRequestOptions')


describe('TodoRequestOptions', () => {
	const host = 'http://mockedurl.test/'
		, todoUrl = 'todo/'
		, todoRequestOptions = new TodoRequestOptions( host, todoUrl )

	// getTodoIdUrl
	it('getTodoIdUrl (return empty)', () => {
		expect( todoRequestOptions.getTodoIdUrl() ).to.be.empty;
	});

	it('getTodoIdUrl({id: Int}) should return Int/', () => {
		var filter = {id: 1}
		expect(todoRequestOptions.getTodoIdUrl( filter )).to.equal(filter.id + '/')

		filter = {id: 2}
		expect(todoRequestOptions.getTodoIdUrl( filter )).to.equal(filter.id + '/')

		filter = {id: 13467839}
		expect(todoRequestOptions.getTodoIdUrl( filter )).to.equal(filter.id + '/')
	});


	// getQueryFilters
	it('getQueryFilters', () => {
		expect(todoRequestOptions.getQueryFilters()).to.be.empty;
	});

	it('getQueryFilters({description: String} return description query url)', () => {
		var filter = {description: 'find'}
		expect( todoRequestOptions.getQueryFilters( filter ) ) .to.have.string('find');


		filter = {description: 'found'}
		expect( todoRequestOptions.getQueryFilters( filter ) ) .to.have.string('found');

	});



	// getUrl
	it('getUrl (return url)', () => {
		var url = host + todoUrl
		expect(todoRequestOptions.getUrl()).to.equal(url)
	});
	it('getUrl({id: Int} return url with task id)', () => {
		var filter = {id: 1123}
		var url = host + todoUrl + todoRequestOptions.getTodoIdUrl(filter)
		expect(todoRequestOptions.getUrl(filter)).to.equal(url)
	});

	it('getUrl({description: Int} return url with queryString filter)', () => {
		var filter = {description: 'searchText'}
		var url = host + todoUrl + todoRequestOptions.getQueryFilters(filter)
		expect(todoRequestOptions.getUrl(filter)).to.equal(url)
	});


	// testing constructor
	it('new TodoRequestOptions(host, get different urls', () => {
		var host2 = 'http://mockedurl-different.test'
		var todoUrl2 = 'diff/'
		var todoRequestOptions2 = new TodoRequestOptions(host2, todoUrl2)

		var url = host2 + todoUrl2
		expect(todoRequestOptions2.getUrl()).to.equal(url)
	});

});
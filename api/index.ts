import * as AppAPI from './App';
import {
	deleteRequest,
	getAbortController,
	getRequest,
	patchRequest,
	postRequest,
	putRequest,
	HttpStatus,
	HttpStatusMessage
} from './Client';

const API = {
	...AppAPI,
	getAbortController,
	DELETE: deleteRequest,
	GET: getRequest,
	PATCH: patchRequest,
	POST: postRequest,
	PUT: putRequest,
	Status: HttpStatus,
	StatusMessage: HttpStatusMessage,
};

export { API };
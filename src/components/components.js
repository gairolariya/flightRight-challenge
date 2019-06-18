/**
 * Component to render dropdown data
 */
const Section = '\r\n<section>' +
    '\r\n<h1> Section Heading</h1>' +
    '\r\n<p>Section content</p>' +
    '\r\n</section>';

const Para = '\r\n<p> Paragraph content </p>';

const Image = '\r\n<figure>' +
    '\r\n<img src="" alt="" width="" height="" />' +
    '\r\n</figure>';

const Table = '\r\n<table>' +
	'\r\n<tr>' +
		'\r\n<th>January</th>' +
		'\r\n<th>February</th>' +
		'\r\n<th>March</th>' +
	'\r\n</tr>' +
'\r\n<tr>' +
		'\r\n<td>31</td>' +
		'\r\n<td>28</td>' +
		'\r\n<td>31</td>' +
'\r\n</tr>' +
'\r\n</table>';

export default {
  Section: Section,
  Para: Para,
  Image: Image,
  Table: Table
};

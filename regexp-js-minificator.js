// Simple, fast, minimal JavaScript minificator

function jsm (text)
{
	text = text.replace(/\/\/.*\n/gi,""); // delete comment
	text = text.replace(/\/\/.*\r/gi,""); // delete comment
	text = text.replace(/\t/gi,""); // delete tab
	text = text.replace(/\/\*([\s\S]*)\*\//gi,""); // delete comment /* */
	text = text.replace(/[\n\r]/gi,"");
	text = text.replace(/\s*if\s*/gi,"if");
	text = text.replace(/\s*else\s*/gi,"else");
	text = text.replace(/\s*\(\s*/gi,"(");
	text = text.replace(/\s*\)\s*/gi,")");
	text = text.replace(/\s*\{\s*/gi,"{");
	text = text.replace(/\s*\}\s*/gi,"}");
	text = text.replace(/\s*\+\s*/gi,"+");
	text = text.replace(/\s*-\s*/gi,"-");
	text = text.replace(/\s*\/\s*/gi,"/");
	text = text.replace(/\s*\*\s*/gi,"*");
	text = text.replace(/\s*>\s*/gi,">");
	text = text.replace(/\s*<\s*/gi,"<");
	text = text.replace(/\s*:\s*/gi,":");
	text = text.replace(/\s*,\s*/gi,",");
	text = text.replace(/\s*'\s*/gi,"'");
	text = text.replace(/\s*"\s*/gi,'"');
	text = text.replace(/\s*=\s*/gi,'=');
	text = text.replace(/\s*==\s*/gi,'==');
	text = text.replace(/\s*===\s*/gi,'===');
	text = text.replace(/\s*\|\|\s*/gi,'||');
	text = text.replace(/\s*&&\s*/gi,'&&');
	text = text.replace(/\s*!=\s*/gi,'!=');
	text = text.replace(/\s*>=\s*/gi,'>=');
	text = text.replace(/\s*<=\s*/gi,'<=');
	text = text.replace(/\s*;\s*/gi,';');
	return text;
}

module.exports = jsm;
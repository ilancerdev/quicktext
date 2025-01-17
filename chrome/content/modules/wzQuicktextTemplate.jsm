var EXPORTED_SYMBOLS = ["wzQuicktextTemplate"];

var { wzQuicktextHeader } = ChromeUtils.import("chrome://quicktext/content/modules/wzQuicktextHeader.jsm");

const kDebug        = true;

function wzQuicktextTemplate() {
  this.mName        = "";
  this.mText        = "";
  this.mShortcut    = "";
  this.mType        = "";
  this.mGroupType   = "";
  this.mKeyword     = "";
  this.mSubject     = "";
  this.mAttachments = "";
  this.mParent      = "";
  this.mHeaders     = [];
}

wzQuicktextTemplate.prototype = {
  get name() { return this.mName; },
  set name(aName) { if (typeof aName != 'undefined') return this.mName = aName; }
,
  get text() { return this.mText; },
  set text(aText) { if (typeof aText != 'undefined') return this.mText = aText; }
,
  get shortcut() { return this.mShortcut; },
  set shortcut(aShortcut) { if (typeof aShortcut != 'undefined') return this.mShortcut = aShortcut; }
,
  get type() { return this.mType; },
  set type(aType) { if (typeof aType != 'undefined') return this.mType = aType; }
,
  get groupType() { return this.mGroupType; },
  set groupType(aType) { if (typeof aType != 'undefined') return this.mGroupType = aType; }
,
  get keyword() { return this.mKeyword; },
  set keyword(aKeyword) { if (typeof aKeyword != 'undefined') return this.mKeyword = aKeyword; }
,
  get subject() { return this.mSubject; },
  set subject(aSubject) { if (typeof aSubject != 'undefined') return this.mSubject = aSubject; }
,
  get attachments() { return this.mAttachments; },
  set attachments(aAttachments) { if (typeof aAttachments != 'undefined') return this.mAttachments = aAttachments; }
, 
  get parent() { return this.mParentName; },
  set parent(aParentName) { if (typeof aParentName != 'undefined') return this.mParent = aParentName; }
,
  getHeader: function (aIndex)
  {
    return this.mHeaders[aIndex];
  }
,
  addHeader: function (aType, aValue)
  {
    var tmp = new wzQuicktextHeader();
    tmp.type = aType;
    tmp.value = aValue;
    this.mHeaders.push(tmp);
  }
,
  removeHeader: function (aIndex)
  {
    this.mHeaders.splice(aIndex, 0);
  }
,
  removeHeaders: function ()
  {
    this.mHeaders = [];
  }
,
  getHeaderLength: function()
  {
    return this.mHeaders.length;
  }
,
  clone: function()
  {
    var newTemplate = new wzQuicktextTemplate();
    newTemplate.name = this.mName;
    newTemplate.text = this.mText;
    newTemplate.shortcut = this.mShortcut;
    newTemplate.type = this.mType;
    newTemplate.keyword = this.mKeyword;
    newTemplate.subject = this.mSubject;
    newTemplate.attachments = this.mAttachments;

    for (var i = 0; i < this.mHeaders.length; i++)
      newTemplate.addHeader(this.mHeaders[i].type, this.mHeaders[i].value);

    return newTemplate;
  }
}


var debug = kDebug ?  function(m) {dump("\t *** wzQuicktext: " + m + "\n");} : function(m) {};

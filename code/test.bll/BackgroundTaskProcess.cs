using System;
using System.Collections;
using System.Collections.Specialized;
using System.Collections.Generic;
using System.Xml;
using System.Data;
using System.Text;

using TrustHX.IHXEIMS6;
using hxsys = TrustHX.HXEIMS6;
using hxsm = TrustHX.HXSM6;
using hxmd = TrustHX.HXMD6;


[Serializable]
public class BackgroundTaskProcess : IBackgroundTask
{
    public void Process(string strSystemCode, string strExtraInfo)
    {
        throw new NotImplementedException();
    }
}


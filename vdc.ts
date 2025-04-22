
import * as dnssd from 'dnssd';

private _initDNSSD() {
    const serviceType = new dnssd.ServiceType('_ds-vdc._tcp');
    if (this.debug) console.log(serviceType);
    const ad = new dnssd.Advertisement(serviceType, this.config.port, {
      name: this.config.vdcName,
      txt: {dSUID: this.config.vdcDSUID},
    });
    ad.start()
      .on('error', err => {
        if (this.debug) console.log('Error:', err);
      })
      .on('stopped', stop => {
        if (this.debug) console.log('Stopped', stop);
      })
      .on('instanceRenamed', instanceRenamed => {
        if (this.debug) console.log('instanceRenamed', instanceRenamed);
      })
      .on('hostRenamed', hostRenamed => {
        if (this.debug) console.log('hostRenamed', hostRenamed);
      });
  }
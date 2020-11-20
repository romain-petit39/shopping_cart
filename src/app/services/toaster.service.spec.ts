/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToasterService } from './toaster.service';
import { ToastController } from '@ionic/angular';

describe('Service: Toaster', () => {

  let toasterSpy;
  let serviceToaster;

  beforeEach(() => {
    toasterSpy = jasmine.createSpyObj('ToastService', ['showSuccess', 'showError', 'showWarning']);

    toasterSpy.showError('test');
    toasterSpy.showWarning('test');
    TestBed.configureTestingModule({
      providers: [ToasterService,
        { provide: ToastController, useValue: toasterSpy }]
    });
    serviceToaster = new ToasterService(toasterSpy);

  });

  it('does some test where it is injected',
    inject([ToasterService], (service: ToasterService) => {
      expect(service).toBeTruthy();
    })
  );

  it('does some test where it is manually built', () => {
    expect(serviceToaster).toBeTruthy();
  });

  describe('#showSuccess', () => {
    beforeEach(() => {
      toasterSpy.showSuccess('test');
    });

    it('should create a spie for showSuccess', () => {
      expect(serviceToaster.showSuccess).toBeDefined();
    });

    it('tracks that the spies were called with test', ()  => {
      expect(toasterSpy.showSuccess).toHaveBeenCalledWith('test');
    });

    // it('should create an object toast', (done) => {
    //   let toast;
    //   toasterSpy.showSuccess()
    // } );

  });



});

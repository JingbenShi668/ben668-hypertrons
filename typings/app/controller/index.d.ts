// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComponent from '../../../app/controller/component';
import ExportDocs from '../../../app/controller/docs';
import ExportInstallation from '../../../app/controller/installation';
import ExportUmlrenderer from '../../../app/controller/umlrenderer';

declare module 'egg' {
  interface IController {
    component: ExportComponent;
    docs: ExportDocs;
    installation: ExportInstallation;
    umlrenderer: ExportUmlrenderer;
  }
}

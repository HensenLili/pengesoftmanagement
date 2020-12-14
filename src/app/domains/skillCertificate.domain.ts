import { DataPacket, QueryDataList } from 'pengesoft-ng-lib';

export class SkillCertificate extends DataPacket {
 /**
  * id.
  */
 SkillId: string;
 /**
  * 员工id.
  */
 StaffId: string;
 /**
  * 等级.
  */
 Level: number;
 /**
  * 图片.
  */
 Img: string;
 /**
  * 获得时间.
  */
 GainTime: Date | undefined;

 constructor(options: any | {
   SkillId?: string;
   StaffId?: string;
   Level?: number;
   Img?: string;
   GainTime?: Date | undefined;
 } = {}) {
   super();
   this.SkillId = options.SkillId || '';
   this.StaffId = options.StaffId || '';
   this.Level = !options.Level ? 0 : Number.parseFloat(options.Level.toString());
   this.Img = options.Img || '';
   this.GainTime = this.newDate(options.GainTime);
 }
}


/**
* 技能证书信息列表
*/
export class SkillCertificateList extends QueryDataList<SkillCertificate> {

 constructor(options: any | {
   _Items?: Array<SkillCertificate>
 } = {}) {
   super();
   if (options._Items) {
     for (const item of options._Items) {
       this.append(new SkillCertificate(item));
     }
   }
 }
}
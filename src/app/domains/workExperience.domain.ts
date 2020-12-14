import { DataPacket, QueryDataList } from 'pengesoft-ng-lib';

export class WorkExperience extends DataPacket {
  /**
   * id.
   */
  WorkExpId: string;
  /**
   * 员工id.
   */
  StaffId: string;
  /**
   * 开始时间.
   */
  StartTime: Date | undefined;
  /**
   * 结束时间.
   */
  EndTime: Date | undefined;
  /**
   * 职位.
   */
  Position: string;
  /**
   * 离职原因.
   */
  Reason: string;

  constructor(options: any | {
    WorkExpId?: string;
    StaffId?: string;
    StartTime?: Date | undefined;
    EndTime?: Date | undefined;
    Position?: string;
    Reason?: string;
  } = {}) {
    super();
    this.WorkExpId = options.WorkExpId || '';
    this.StaffId = options.StaffId || '';
    this.StartTime = this.newDate(options.StartTime);
    this.EndTime = this.newDate(options.EndTime);
    this.Position = options.Position || '';
    this.Reason = options.Reason || '';
  }
}



export class WorkExperienceList extends QueryDataList<WorkExperience> {

  constructor(options: any | {
    _Items?: Array<WorkExperience>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new WorkExperience(item));
      }
    }
  }
}

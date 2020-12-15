import { DataPacket } from 'pengesoft-ng-lib';

/**
 * 员工基础信息
 */
export class Staff extends DataPacket {
  StaffId?: string; // 工号
  Birth?: Date | string; // 生日
  IdCard?: string; // 身份证号码
  Age?: number; // 年龄
  PyDays?: number; // 鹏业工龄
  WorkDays?: number; // 职业工龄
  MaritalStatus?: string; // 婚姻状况
  Gender?: string; // 性别
  Political?: string; // 政治面貌
  Nation?: string; // 民族
  PermanentAdress?: string; // 户籍地址
  HouserPhoneNumber?: string; // 家庭电话
  PhoneNumber?: string; // 手机号码
  Email?: string; // 个人邮箱
  Wechat?: string; // 微信
  QQ?: string; // qq
  WorNature?: number; // 工作性质
  WorkStatus?: number; // 工作状态
  EntryTime?: Date | string; // 入职时间
  UrgentName?: string; // 紧急联系人姓名
  UrgentTel?: string; // 紧急联系人电话
  UrgentRel?: string; // 与紧急联系人关系
  PositionId?: string; // 岗位编号
  Name?: string; // 姓名
  NodeId?: number; // 部门编号
  Degree?: string; // 最高学位
  Position?: Array<Position>; // 岗位

  constructor(options: {
    StaffId?: string;
    Birth?: Date | string;
    IdCard?: string;
    Age?: number;
    PyDays?: number;
    WorkDays?: number;
    MaritalStatus?: string;
    Gender?: string;
    Political?: string;
    Nation?: string;
    PermanentAdress?: string;
    HouserPhoneNumber?: string;
    PhoneNumber?: string;
    Email?: string;
    Wechat?: string;
    QQ?: string;
    WorNature?: number;
    WorkStatus?: number;
    EntryTime?: Date | string;
    UrgentName?: string;
    UrgentTel?: string;
    UrgentRel?: string;
    PositionId?: string;
    Name?: string;
    NodeId?: number;
    Degree?: string;
    Position?: Position;
  } = {}) {
    super();
    this.StaffId = options.StaffId || '';
    this.Birth = this.newDate(options.Birth)||'';
    this.IdCard = options.IdCard || '';
    this.Age = !options.Age ? 0 : Number.parseFloat(options.Age.toString());
    this.PyDays = !options.PyDays ? 0 : Number.parseFloat(options.PyDays.toString());
    this.WorkDays = !options.WorkDays ? 0 : Number.parseFloat(options.WorkDays.toString());
    this.MaritalStatus = options.MaritalStatus || '';
    this.Gender = options.Gender || '';
    this.Political = options.Political || '';
    this.Nation = options.Nation || '';
    this.PermanentAdress = options.PermanentAdress || '';
    this.HouserPhoneNumber = options.HouserPhoneNumber || '';
    this.PhoneNumber = options.PhoneNumber || '';
    this.Email = options.Email || '';
    this.Wechat = options.Wechat || '';
    this.QQ = options.QQ || '';
    this.WorNature = !options.WorNature ? 0 : Number.parseFloat(options.WorNature.toString());
    this.WorkStatus = !options.WorkStatus ? 0 : Number.parseFloat(options.WorkStatus.toString());
    this.EntryTime = this.newDate(options.EntryTime) ||'';
    this.UrgentName = options.UrgentName || '';
    this.UrgentTel = options.UrgentTel || '';
    this.UrgentRel = options.UrgentRel || '';
    this.PositionId = options.PositionId || '';
    this.Name = options.Name || '';
    this.NodeId = !options.NodeId ? 0 : Number.parseFloat(options.NodeId.toString());
    this.Degree = options.Degree || '';
    this.Position = new Array<Position>(options?.Position);
  }
}

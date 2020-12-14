import { DataPacket, Department, QueryDataList } from 'pengesoft-ng-lib';
import { Contract } from './contract.domian';
import { Position } from './position.domain';
import { SkillCertificate } from './skillCertificate.domain';
import { WorkExperience } from './workExperience.domain';

export class Staff extends DataPacket {
  /**
   * 工号.
   */
  StaffId: string;
  /**
   * 生日.
   */
  Birth: Date | undefined;
  /**
   * 身份证号码.
   */
  IdCard: string;
  /**
   * 身份证正面.
   */
  PositiveImg: string;
  /**
   * 身份证反面.
   */
  VersoImg: string;
  /**
   * 年龄.
   */
  Age: string;
  /**
   * 婚姻状况.
   */
  MaritalStatus: string;
  /**
   * 性别.
   */
  Gender: string;
  /**
   * 学历.
   */
  Education: string;
  /**
   * 政治面貌.
   */
  Political: string;
  /**
   * 民族.
   */
  Nation: string;
  /**
   * 户籍地址.
   */
  PermanentAdress: string;
  /**
   * 家庭电话.
   */
  HouserPhoneNumber: string;
  /**
   * 手机号码.
   */
  PhoneNumber: string;
  /**
   * 个人邮箱.
   */
  Email: string;
  /**
   * 微信.
   */
  Wechat: string;
  /**
   * qq.
   */
  QQ: string;
  /**
   * 工作性质.
   */
  WorNature: number;
  /**
   * 工作状态.
   */
  WorkStatus: number;
  /**
   * 入职时间.
   */
  EntryTime: Date | undefined;
  /**
   * 银行卡账户.
   */
  BankCard: string;
  /**
   * 开户行名称.
   */
  BankName: string;
  /**
   * 银行卡图片.
   */
  BankImg: string;
  /**
   * 开户银行地址.
   */
  BankAddress: string;
  /**
   * 紧急联系人姓名.
   */
  UrgentName: string;
  /**
   * 紧急联系人电话.
   */
  UrgentTel: string;
  /**
   * 与紧急联系人关系.
   */
  UrgentRel: string;
  /**
   * 岗位编号.
   */
  PositionId: string;
  /**
   * 姓名.
   */
  Name: string;
  /**
   * 部门编号.
   */
  NodeId: number;
  /**
   * 合同.
   */
  Contracts: Array<Contract>;
  /**
   * 工作经历.
   */
  WorkExperiences: Array<WorkExperience>;
  /**
   * 证书.
   */
  Certificate: Array<SkillCertificate>;
  /**
   * 工作岗位.
   */
  Position: Position;
  /**
   * 部门.
   */
  Department: Department;
  /**
   * 最高学位.
   */
  Degree: string;

  constructor(options: any | {
    StaffId?: string;
    Birth?: Date | undefined;
    IdCard?: string;
    PositiveImg?: string;
    VersoImg?: string;
    Age?: string;
    MaritalStatus?: string;
    Gender?: string;
    Education?: string;
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
    EntryTime?: Date | undefined;
    BankCard?: string;
    BankName?: string;
    BankImg?: string;
    BankAddress?: string;
    UrgentName?: string;
    UrgentTel?: string;
    UrgentRel?: string;
    PositionId?: string;
    Name?: string;
    NodeId?: number;
    Contracts?: Array<Contract>;
    WorkExperiences?: Array<WorkExperience>;
    Certificate?: Array<SkillCertificate>;
    Position?: Position;
    Department?: Department;
    Degree?: string;
  } = {}) {
    super();
    this.StaffId = options.StaffId || '';
    this.Birth = this.newDate(options.Birth);
    this.IdCard = options.IdCard || '';
    this.PositiveImg = options.PositiveImg || '';
    this.VersoImg = options.VersoImg || '';
    this.Age = options.Age || '';
    this.MaritalStatus = options.MaritalStatus || '';
    this.Gender = options.Gender || '';
    this.Education = options.Education || '';
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
    this.EntryTime = this.newDate(options.EntryTime);
    this.BankCard = options.BankCard || '';
    this.BankName = options.BankName || '';
    this.BankImg = options.BankImg || '';
    this.BankAddress = options.BankAddress || '';
    this.UrgentName = options.UrgentName || '';
    this.UrgentTel = options.UrgentTel || '';
    this.UrgentRel = options.UrgentRel || '';
    this.PositionId = options.PositionId || '';
    this.Name = options.Name || '';
    this.NodeId = !options.NodeId ? 0 : Number.parseFloat(options.NodeId.toString());
    this.Contracts = options.Contracts || '';
    this.WorkExperiences = options.WorkExperiences || '';
    this.Certificate = options.Certificate || '';
    this.Position = new Position(options.Position || {});
    this.Department = new Department(options.Department || {});
    this.Degree = options.Degree || '';
  }
}


/**
 * 员工基础信息列表
 */

export class StaffList extends QueryDataList<Staff> {

  constructor(options: any | {
    _Items?: Array<Staff>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Staff(item));
      }
    }
  }
}

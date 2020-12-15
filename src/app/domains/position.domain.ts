import { DataPacket, Department, NorDataList } from 'pengesoft-ng-lib';


/**
 * 岗位信息
 */
export class Position extends DataPacket {
  PositionId: string; // id
  NodeId: number; // 所属部门id
  PositionTypeId: string; // 岗位类别id
  Name: string; // 岗位名称
  Description: string; // 岗位描述
  Department: Department; // 所属部门

  constructor(options: {
    PositionId?: string;
    NodeId?: number;
    PositionTypeId?: string;
    Name?: string;
    Description?: string;
    Department?: Department;
  } = {}) {
    super();
    this.PositionId = options.PositionId || '';
    this.NodeId = !options.NodeId ? 0 : Number.parseFloat(options.NodeId.toString());
    this.PositionTypeId = options.PositionTypeId || '';
    this.Name = options.Name || '';
    this.Description = options.Description || '';
    this.Department = new Department(options?.Department);
  }
}

/**
 * 岗位信息列表
 */
export class PositionList extends NorDataList<Position> {

  constructor(options: {
    _Items?: Array<Position>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Position(item));
      }
    }
  }
}

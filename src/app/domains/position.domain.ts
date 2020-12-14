
/**
 * 岗位信息.
 */

import { DataPacket, QueryDataList } from 'pengesoft-ng-lib';

export class Position extends DataPacket {
  /**
   * id.
   */
  PositionId: string;
  /**
   * 所属部门id.
   */
  NodeId: number;
  /**
   * 岗位类别id.
   */
  PositionTypeId: string;
  /**
   * 岗位名称.
   */
  name: string;
  /**
   * 岗位描述.
   */
  Description: string;

  constructor(options: any | {
    PositionId?: string;
    NodeId?: number;
    PositionTypeId?: string;
    name?: string;
    Description?: string;
  } = {}) {
    super();
    this.PositionId = options.PositionId || '';
    this.NodeId = !options.NodeId ? 0 : Number.parseFloat(options.NodeId.toString());
    this.PositionTypeId = options.PositionTypeId || '';
    this.name = options.name || '';
    this.Description = options.Description || '';
  }
}


/**
 * 岗位信息列表
 */

export class PositionList extends QueryDataList<Position> {

  constructor(options: any | {
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
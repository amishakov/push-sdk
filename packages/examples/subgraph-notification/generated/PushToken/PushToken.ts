// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokens(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get tokenOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokens(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PushToken extends ethereum.SmartContract {
  static bind(address: Address): PushToken {
    return new PushToken("PushToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(spender: Address, tokens: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(tokens)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, tokens: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(tokens)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(from: Address, to: Address, tokens: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(tokens)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    tokens: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(tokens)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  _totalSupply(): BigInt {
    let result = super.call("_totalSupply", "_totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try__totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_totalSupply", "_totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(tokenOwner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(tokenOwner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(tokenOwner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(tokenOwner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  safeSub(a: BigInt, b: BigInt): BigInt {
    let result = super.call("safeSub", "safeSub(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(a),
      ethereum.Value.fromUnsignedBigInt(b)
    ]);

    return result[0].toBigInt();
  }

  try_safeSub(a: BigInt, b: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "safeSub",
      "safeSub(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(a),
        ethereum.Value.fromUnsignedBigInt(b)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(to: Address, tokens: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(tokens)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, tokens: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(tokens)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  safeDiv(a: BigInt, b: BigInt): BigInt {
    let result = super.call("safeDiv", "safeDiv(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(a),
      ethereum.Value.fromUnsignedBigInt(b)
    ]);

    return result[0].toBigInt();
  }

  try_safeDiv(a: BigInt, b: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "safeDiv",
      "safeDiv(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(a),
        ethereum.Value.fromUnsignedBigInt(b)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approveAndCall(spender: Address, tokens: BigInt, data: Bytes): boolean {
    let result = super.call(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(tokens),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBoolean();
  }

  try_approveAndCall(
    spender: Address,
    tokens: BigInt,
    data: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(tokens),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  safeMul(a: BigInt, b: BigInt): BigInt {
    let result = super.call("safeMul", "safeMul(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(a),
      ethereum.Value.fromUnsignedBigInt(b)
    ]);

    return result[0].toBigInt();
  }

  try_safeMul(a: BigInt, b: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "safeMul",
      "safeMul(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(a),
        ethereum.Value.fromUnsignedBigInt(b)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(tokenOwner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(tokenOwner),
        ethereum.Value.fromAddress(spender)
      ]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    tokenOwner: Address,
    spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(tokenOwner),
        ethereum.Value.fromAddress(spender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  safeAdd(a: BigInt, b: BigInt): BigInt {
    let result = super.call("safeAdd", "safeAdd(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(a),
      ethereum.Value.fromUnsignedBigInt(b)
    ]);

    return result[0].toBigInt();
  }

  try_safeAdd(a: BigInt, b: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "safeAdd",
      "safeAdd(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(a),
        ethereum.Value.fromUnsignedBigInt(b)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokens(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveAndCallCall extends ethereum.Call {
  get inputs(): ApproveAndCallCall__Inputs {
    return new ApproveAndCallCall__Inputs(this);
  }

  get outputs(): ApproveAndCallCall__Outputs {
    return new ApproveAndCallCall__Outputs(this);
  }
}

export class ApproveAndCallCall__Inputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ApproveAndCallCall__Outputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

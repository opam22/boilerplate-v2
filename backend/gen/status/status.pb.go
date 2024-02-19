// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.25.3
// source: status/status.proto

package status

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type StatusResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	StatusCode string `protobuf:"bytes,1,opt,name=status_code,proto3" json:"status_code,omitempty"`
	StatusDesc string `protobuf:"bytes,2,opt,name=status_desc,proto3" json:"status_desc,omitempty"`
}

func (x *StatusResponse) Reset() {
	*x = StatusResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_status_status_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StatusResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StatusResponse) ProtoMessage() {}

func (x *StatusResponse) ProtoReflect() protoreflect.Message {
	mi := &file_status_status_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StatusResponse.ProtoReflect.Descriptor instead.
func (*StatusResponse) Descriptor() ([]byte, []int) {
	return file_status_status_proto_rawDescGZIP(), []int{0}
}

func (x *StatusResponse) GetStatusCode() string {
	if x != nil {
		return x.StatusCode
	}
	return ""
}

func (x *StatusResponse) GetStatusDesc() string {
	if x != nil {
		return x.StatusDesc
	}
	return ""
}

var File_status_status_proto protoreflect.FileDescriptor

var file_status_status_proto_rawDesc = []byte{
	0x0a, 0x13, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x54, 0x0a,
	0x0e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x20, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5f, 0x63, 0x6f, 0x64,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5f, 0x64, 0x65, 0x73, 0x63,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5f, 0x64,
	0x65, 0x73, 0x63, 0x42, 0x09, 0x5a, 0x07, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_status_status_proto_rawDescOnce sync.Once
	file_status_status_proto_rawDescData = file_status_status_proto_rawDesc
)

func file_status_status_proto_rawDescGZIP() []byte {
	file_status_status_proto_rawDescOnce.Do(func() {
		file_status_status_proto_rawDescData = protoimpl.X.CompressGZIP(file_status_status_proto_rawDescData)
	})
	return file_status_status_proto_rawDescData
}

var file_status_status_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_status_status_proto_goTypes = []interface{}{
	(*StatusResponse)(nil), // 0: status.StatusResponse
}
var file_status_status_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_status_status_proto_init() }
func file_status_status_proto_init() {
	if File_status_status_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_status_status_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StatusResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_status_status_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_status_status_proto_goTypes,
		DependencyIndexes: file_status_status_proto_depIdxs,
		MessageInfos:      file_status_status_proto_msgTypes,
	}.Build()
	File_status_status_proto = out.File
	file_status_status_proto_rawDesc = nil
	file_status_status_proto_goTypes = nil
	file_status_status_proto_depIdxs = nil
}

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import SimpleForm from '../form/SimpleForm';
import SimpleFormIterator from '../form/SimpleFormIterator';
import ArrayInput from '../input/ArrayInput';
import BooleanInput from '../input/BooleanInput';
import DateInput from '../input/DateInput';
import NumberInput from '../input/NumberInput';
import ReferenceInput from '../input/ReferenceInput';
import ReferenceArrayInput from '../input/ReferenceArrayInput';
import SelectInput from '../input/SelectInput';
import TextInput from '../input/TextInput';
export default {
    form: {
        component: SimpleForm,
        representation: function (_, children) { return "        <SimpleForm>\n" + children.map(function (child) { return "            " + child.getRepresentation(); }).join('\n') + "\n        </SimpleForm>"; },
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: function (_a) {
            var children = _a.children, props = __rest(_a, ["children"]);
            return (React.createElement(ArrayInput, __assign({}, props),
                React.createElement(SimpleFormIterator, null, children)));
        },
        representation: function (props, children) {
            return "<ArrayInput source=\"" + props.source + "\"><SimpleFormIterator>" + children
                .map(function (child) { return child.getRepresentation(); })
                .join('\n') + "</SimpleFormIterator></ArrayInput>";
        },
    },
    boolean: {
        component: BooleanInput,
        representation: function (props) { return "<BooleanInput source=\"" + props.source + "\" />"; },
    },
    date: {
        component: DateInput,
        representation: function (props) { return "<DateInput source=\"" + props.source + "\" />"; },
    },
    email: {
        component: TextInput,
        representation: function (props) { return "<TextInput source=\"" + props.source + "\" />"; },
    },
    id: {
        component: TextInput,
        representation: function (props) { return "<TextInput source=\"" + props.source + "\" />"; },
    },
    number: {
        component: NumberInput,
        representation: function (props) { return "<NumberInput source=\"" + props.source + "\" />"; },
    },
    reference: {
        component: ReferenceInput,
        representation: function (props, children) {
            return "<ReferenceInput source=\"" + props.source + "\" reference=\"" + props.reference + "\">" + children.getRepresentation() + "</ReferenceInput>";
        },
    },
    referenceChild: {
        component: function (props) { return React.createElement(SelectInput, __assign({ optionText: "id" }, props)); },
        representation: function () { return "<SelectInput optionText=\"id\" />"; },
    },
    referenceArray: {
        component: ReferenceArrayInput,
        representation: function (props) {
            return "<ReferenceArrayInput source=\"" + props.source + "\" reference=\"" + props.reference + "\"><TextInput source=\"id\" /></ReferenceArrayInput>";
        },
    },
    referenceArrayChild: {
        component: function (props) { return React.createElement(SelectInput, __assign({ optionText: "id" }, props)); },
        representation: function () { return "<SelectInput optionText=\"id\" />"; },
    },
    richText: {
        component: TextInput,
        representation: function (props) { return "<TextInput source=\"" + props.source + "\" />"; },
    },
    string: {
        component: TextInput,
        representation: function (props) { return "<TextInput source=\"" + props.source + "\" />"; },
    },
    url: {
        component: TextInput,
        representation: function (props) { return "<TextInput source=\"" + props.source + "\" />"; },
    },
};
